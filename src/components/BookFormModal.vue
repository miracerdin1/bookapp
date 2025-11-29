<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'
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
import { BookItemModel } from '@/types'
import bookImg from '@/assets/images/Sun Rise Of The Reaping.png'
import { DEFAULT_FORM_DATA, useBookForm } from '@/composables/useBookForm'

const props = defineProps<{
    open?: boolean,
    formData?: BookItemModel
}>()

const emit = defineEmits<{
    'update:open': [value: boolean]
}>()

const formData = ref<Partial<BookItemModel>>({
    ...DEFAULT_FORM_DATA
})

const imagePreview = shallowRef<string>(bookImg)

function handleImageUpload(e: Event) {
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

function handleSubmit(e: Event) {
    e.preventDefault()

    useBookForm().submitBook(formData.value)
    resetForm();
    emit('update:open', false)
}

function resetForm() {
    formData.value = { ...DEFAULT_FORM_DATA }
    imagePreview.value = bookImg
}

onMounted(() => {
    if (props.formData) {
        formData.value = { ...props.formData }
        imagePreview.value = props.formData.img
    }
})
</script>

<template>
    <Dialog :open="props.open" @update:open="(val) => emit('update:open', val)">
        <form @submit="handleSubmit">
            <DialogTrigger as-child>

            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle class="font-bold text-base text-textThird border-b pb-3 border-b-grayBorderLight">Book
                        entry form
                    </DialogTitle>
                    <DialogDescription class="font-roboto text-sm">
                        Fill out the fields below to add a new book to the library system.
                    </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-textThird">Book Cover</label>
                        <div class="flex items-center gap-4">
                            <img :src="imagePreview" alt="Book cover preview"
                                class="w-20 h-28 object-cover rounded border border-grayBorderLight" />
                            <Input id="image" type="file" accept="image/*" @change="handleImageUpload"
                                class="flex-1 rounded-lg border h-11 border-grayBorderLight text-textThird" />
                        </div>
                    </div>

                    <Input id="name-1" v-model="formData.title" placeholder="Book title"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />
                    <Input id="author-1" v-model="formData.author" placeholder="Author"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />
                    <Input id="pages" v-model.number="formData.totalPage" type="number"
                        placeholder="Total number of page"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />
                    <book-status-select v-model="formData.status" hideAll />
                    <Input id="readPage" v-model.number="formData.readPage" type="number"
                        placeholder="Number of pages read"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />
                </div>
                <DialogFooter>
                    <Button type="submit"
                        class="w-full bg-secondary text-white px-6 py-2 rounded-lg text-[14px] hover:bg-buttonHover transition"
                        @click="handleSubmit">
                        Add book
                    </Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
</template>
