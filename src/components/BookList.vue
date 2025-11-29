<template>
  <div class="flex flex-col max-w-[1360px] mt-[60px] gap-5">
    <div class="flex justify-between">
      <div class="text-2xl font-bold">Books</div>
      <div class="flex gap-6">
        <InputGroup class="w-[350px] h-[44px] border-grayBorderLight text-textThird">
          <InputGroupInput placeholder="Search" :icon="searchIcon" />
        </InputGroup>

        <book-status-select />
      </div>
    </div>
    <div class="flex flex-wrap gap-8">
      <book-item v-for="item in bookItems" :key="item.id" :item="item" />
    </div>
    <book-pagination />
  </div>
</template>

<script setup lang="ts">
import { BookItemModel, EnumBookStatus, SelectModel } from '@/types'
import BookItem from './BookItem.vue'
import { useBooks } from '@/composables/useBooks'
import { ref } from 'vue';
import bookImg from '@/assets/images/Sun Rise Of The Reaping.png';
import SecondCardImage from "@/assets/images/The Let Them.png"
import InputGroupInput from './ui/input-group/InputGroupInput.vue';
import searchIcon from '@/assets/icons/search.svg';
import BookPagination from './BookPagination.vue';
import BookStatusSelect from './BookStatusSelect.vue';
import InputGroup from './ui/input-group/InputGroup.vue';

const props = defineProps({

})
const emit = defineEmits(['edit', 'delete'])


const bookItems = ref<BookItemModel[]>([
  {
    id: 1,
    title: 'Item 1',
    content: 'Content for Item 1',
    img: bookImg,
    status: EnumBookStatus.Completed,
    explanation: "Dating and Dragons",
    user: "Tedd",
    readPage: 115,
    progress: "%30",
    isFavorite: true
  },
  {
    id: 2,
    title: 'Item 2',
    content: 'Content for Item 2',
    img: SecondCardImage,
    status: EnumBookStatus.InProgress,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: false
  },
  {
    id: 3,
    title: 'Item 3',
    content: 'Content for Item 3',
    img: bookImg,
    status: EnumBookStatus.NotStarted,
    explanation: "Dating and Dragons",
    user: "Tedd",
    readPage: 115,
    progress: "%30",
    isFavorite: true
  },
  {
    id: 4,
    title: 'Item 4',
    content: 'Content for Item 4',
    img: SecondCardImage,
    status: EnumBookStatus.Completed,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: false
  },
  {
    id: 5,
    title: 'Item 5',
    content: 'Content for Item 5',
    img: bookImg,
    status: EnumBookStatus.InProgress,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    progress: "%30",
    isFavorite: true
  },
  {
    id: 6,
    title: 'Item 5',
    content: 'Content for Item 5',
    img: bookImg,
    status: EnumBookStatus.InProgress,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: false
  },
  {
    id: 7,
    title: 'Item 5',
    content: 'Content for Item 5',
    img: bookImg,
    status: EnumBookStatus.InProgress,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: true
  },
  {
    id: 8,
    title: 'Item 5',
    content: 'Content for Item 5',
    img: bookImg,
    status: EnumBookStatus.InProgress,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: false
  },
  {
    id: 9,
    title: 'Item 5',
    content: 'Content for Item 5',
    img: bookImg,
    status: EnumBookStatus.InProgress,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115, isFavorite: true
  },
  {
    id: 10,
    title: 'Item 4',
    content: 'Content for Item 4',
    img: SecondCardImage,
    status: EnumBookStatus.Completed,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: true
  },
  {
    id: 11,
    title: 'Item 4',
    content: 'Content for Item 4',
    img: SecondCardImage,
    status: EnumBookStatus.Completed,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: true
  },
  {
    id: 12,
    title: 'Item 4',
    content: 'Content for Item 4',
    img: SecondCardImage,
    status: EnumBookStatus.Completed,
    explanation: "The Ten Thousand Doors of January",
    user: "Tedd",
    readPage: 115,
    isFavorite: true
  },
])

const { toggleFavorite, removeBook } = useBooks()

function onFavorite(id) {
  toggleFavorite(id)
}
function onEdit(id) {
  emit('edit', id)
}
function onDelete(id) {
  removeBook(id)
  emit('delete', id)
}
</script>
