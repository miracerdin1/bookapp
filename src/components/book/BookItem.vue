<script setup lang="ts">
import { BookItemModel, EnumBookStatus } from '@/types';
import Button from '../ui/button/Button.vue';
import redHeart from '@/assets/icons/red-heart.svg';
import blackHeart from '@/assets/icons/black-heart.svg';
import Card from '../ui/card/Card.vue';
import CardContent from '../ui/card/CardContent.vue';
import BookFormModal from './BookFormModal.vue';
import { ref, shallowRef, watch } from 'vue';
import { useBooksStore } from '@/stores/books';
import IconThrash from '../icons/IconThrash.vue';
import { useBookForm } from '@/composables/useBookForm';
import { useBookStatus } from "@/composables/useBookStatus";

const booksStore = useBooksStore()
const { deleteBook } = useBookForm()
const { getStatusClass, getStatusText } = useBookStatus();

const props = defineProps<{
  item: BookItemModel;
  isFavorite?: boolean;
}>();

const isModalOpen = shallowRef(false)
const formData = ref<BookItemModel>(props.item);

const openModal = () => {
  isModalOpen.value = true;

};

const onFavorite = (id: number) => {
  booksStore.toggleFavorite(id)
}

const deleteItem = () => {
  deleteBook(props.item.id)
}

watch(
  () => props.item,
  (val: BookItemModel) => {
    if (val) {
      formData.value = { ...val }
    }
  },
  { deep: true }
)

</script>

<template>
  <Card>
    <CardContent class="p-0 flex gap-[22px] h-full dark:text-primary"
      :class="isFavorite ? 'flex-row' : 'flex-col w-[200px]'">
      <div class="relative">
        <img :src="item.img" alt="img" class="w-full h-[258px] object-cover" />
        <span
          class="absolute top-2 right-2 cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center"
          @click="onFavorite(item.id)">
          <img :src="item.isFavorite ? redHeart : blackHeart" alt="favorite" class="w-6 h-6" />
        </span>
      </div>

      <div class="flex gap-3 px-2 flex-1 flex-col h-full justify-between">
        <div class="flex justify-between">
          <span class="px-[10px] py-[6px] rounded text-xs " :class="getStatusClass(item.status)">{{
            getStatusText(item.status) }}
          </span>
          <span v-if="item.status === EnumBookStatus.InProgress" class="font-bold text-lg leading-[100%]">{{
            item.progress }}</span>
        </div>
        <div class="font-bold text-sm">{{ item.explanation }}</div>
        <div class="flex flex-col gap-3">
          <div class="flex  gap-[8px]" :class="isFavorite ? 'flex-col' : 'flex-row'">
            <div class=" flex item-center gap-[6px] text-textThird  text-sm font-medium dark:text-textSecondary">
              <span class="flex items-center "><img src="@/assets/icons/user.svg" /></span>{{ item.author
              }}
            </div>
            <div class="text-textThird text-sm font-medium dark:text-textSecondary"> {{
              `${item.readPage} pages` }}</div>
          </div>
          <div :class="isFavorite ? 'flex flex-row' : 'flex justify-end'" class="gap-2">
            <Button variant="outline" class="bg-secondary hover:bg-buttonHover text-white p-[10px] w-full"
              @click="openModal">
              Update Info
            </Button>

            <icon-thrash @click="deleteItem" class="text-red-500"/>

          </div>
        </div>
      </div>
    </CardContent>
    <book-form-modal v-if="isModalOpen" v-model:open="isModalOpen" :form-data="formData" />
  </Card>
</template>