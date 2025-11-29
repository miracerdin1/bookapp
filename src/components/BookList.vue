<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import BookItem from './BookItem.vue'
import InputGroupInput from './ui/input-group/InputGroupInput.vue'
import searchIcon from '@/assets/icons/search.svg'
import BookPagination from './BookPagination.vue'
import BookStatusSelect from './BookStatusSelect.vue'
import InputGroup from './ui/input-group/InputGroup.vue'
import { useBooksStore } from '@/stores/books'
import { EnumBookStatus } from '@/types'
import NoSearchResult from './NoSearchResult.vue'
import BulkActions from './BulkActions.vue'
import { useBooks } from '@/composables/useBooks'

const booksStore = useBooksStore()
const { totalBooks, completedBooks, inProgressBooks, notStartedBooks } = useBooks()

const searchText = shallowRef('')
const selectedStatus = shallowRef<EnumBookStatus | null>(null);
const currentPage = shallowRef(1)
const itemsPerPage = 12;

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredBooks.value.slice(start, end)
})

function handlePageChange(page: number) {
  currentPage.value = page
}

const filteredBooks = computed(() => {
  let list = booksStore.books
  const search = searchText.value.trim().toLowerCase()

  if (searchText.value.trim()) {
    list = list.filter(book =>
      book.title.toLowerCase().includes(search) || book.author?.toLowerCase().includes(search)
    )
  }

  if (selectedStatus.value !== null) {
    list = list.filter(book => book.status === selectedStatus.value)
  }

  return list
})
</script>
<template>
  <div class="flex flex-col max-w-[1360px] mt-[60px] gap-5">
    <div class="flex justify-between">
      <div class="text-2xl font-bold dark:text-textSecondary">
        <div>Books</div>
        <div class="flex gap-4 mt-2 dark:text-textSecondary text-sm">
          <span class="pr-3 py-1 bg-gray-200 rounded">Total: {{ totalBooks }}</span>
          <span class="px-3 py-1 bg-green-200 rounded">Completed: {{ completedBooks }}</span>
          <span class="px-3 py-1 bg-blue-200 rounded">Reading: {{ inProgressBooks }}</span>
          <span class="px-3 py-1 bg-yellow-200  rounded">To Read: {{ notStartedBooks }}</span>
        </div>
      </div>
      <div class="flex gap-6">
        <InputGroup class="w-[350px] h-[44px] border-grayBorderLight text-textThird">
          <InputGroupInput v-model="searchText" placeholder="Search" :icon="searchIcon" />
        </InputGroup>
        <book-status-select v-model="selectedStatus" />
      </div>
    </div>
    <div v-if="paginatedBooks?.length" class="flex flex-wrap gap-8">
      <book-item v-for="item in paginatedBooks" :key="item.id" :item="item" />
    </div>
    <bulk-actions v-if="filteredBooks?.length" :items="filteredBooks" />
    <no-search-result v-else />

    <book-pagination v-if="filteredBooks.length" :items-per-page="itemsPerPage" :items="filteredBooks"
      @change="handlePageChange" />
  </div>
</template>