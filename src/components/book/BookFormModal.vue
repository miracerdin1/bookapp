<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watch } from 'vue'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import BookStatusSelect from './BookStatusSelect.vue'
import {BookItemModel, EnumBookStatus} from '@/types'
import bookImg from '@/assets/images/Sun Rise Of The Reaping.png'
import { DEFAULT_FORM_DATA, useBookForm } from '@/composables/useBookForm'

const { addBook, updateBook, applyStatusLogic } = useBookForm()

const props = defineProps<{
    open?: boolean,
    formData?: BookItemModel
}>()

const emit = defineEmits<{
    'update:open': [value: boolean]
}>()

const isReadPageDisabled = shallowRef(false)

const formData = ref<Partial<BookItemModel>>({
    ...DEFAULT_FORM_DATA
})

const imagePreview = shallowRef<string>(bookImg)
const titleError = shallowRef('')

const bookActionLabel = computed(() =>
    props.formData?.id ? 'Update book info' : 'Add book'
)

const isTitleInvalid = computed(() => {
    return !formData.value.title?.trim()?.length && !!titleError.value
})

const handleImageUpload = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
            const result = event.target?.result as string
            imagePreview.value = result
            formData.value.img = result
        }
        reader.readAsDataURL(file)
    }
}

const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!formData.value.title?.trim()) {
        titleError.value = 'Book title is required'
        return;
    };

    titleError.value = ''
    formData.value.id
        ? updateBook(formData.value)
        : addBook(formData.value)
    resetForm();
    emit('update:open', false)
}

const resetForm = () => {
    formData.value = { ...DEFAULT_FORM_DATA }
    imagePreview.value = bookImg
}


watch(() => props.formData, (val) => {
    if (val) {
        formData.value = { ...val }
        imagePreview.value = val.img
    }
}, { immediate: true })

watch(
    () => formData.value.status,
    (newStatus) => {
      applyStatusLogic(
          newStatus as EnumBookStatus,
          formData.value.totalPage,
          formData.value,
          isReadPageDisabled
      )
    },
    { immediate: true }
)
</script>

<template>
    <Dialog :open="props.open" @update:open="(val) => emit('update:open', val)">
        <form @submit="handleSubmit">
            <DialogTrigger as-child>

            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px] md:max-w-[484px] bg-white dark:text-neutral-100 dark:bg-black">
                <DialogHeader>
                    <DialogTitle
                        class="font-bold text-base text-textThird border-b pb-3 border-b-grayBorderLight dark:text-neutral-100">
                        Book
                        entry form
                    </DialogTitle>
                    <DialogDescription class="font-roboto text-sm">
                        Fill out the fields below to add a new book to the library system.
                    </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-textThird dark:text-neutral-100">Book Cover</label>
                        <div class="flex items-center gap-4 ">
                            <img :src="imagePreview" alt="Book cover preview"
                                class="w-20 h-28 object-cover rounded border border-grayBorderLight" />
                            <Input id="image" type="file" accept="image/*" @change="handleImageUpload"
                                class="flex-1 rounded-lg border h-11 border-grayBorderLight text-textThird dark:text-neutral-100" />
                        </div>
                    </div>

                    <Input req id="name-1" v-model="formData.title" placeholder="Book title"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird dark:bg-neutral-900 dark:text-neutral-100 "
                        :class="{ 'border-red-500': isTitleInvalid }" />
                    <p v-if="isTitleInvalid" class="text-red-500 text-xs mt-1">
                        {{ titleError }}
                    </p>
                    <Input id="author-1" v-model="formData.author" placeholder="Author"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird dark:bg-neutral-900 dark:text-neutral-100" />
                    <Input id="pages" v-model.number="formData.totalPage" type="number"
                        placeholder="Total number of page"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird dark:bg-neutral-900 dark:text-neutral-100" />
                    <book-status-select v-model="formData.status" hideAll />
                    <Input id="readPage" v-model.number="formData.readPage" type="number"
                           :disabled="isReadPageDisabled"
                        placeholder="Number of pages read"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird dark:bg-neutral-900 dark:text-neutral-100" />
                </div>
                <DialogFooter>
                    <Button type="submit"
                        class="w-full bg-secondary text-white px-6 py-2 rounded-lg text-sm hover:bg-buttonHover  dark:text-neutral-100"
                        @click="handleSubmit">
                        {{ bookActionLabel }}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
</template>
