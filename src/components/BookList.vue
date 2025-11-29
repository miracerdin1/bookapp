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

const booksStore = useBooksStore()

const searchText = shallowRef('')
const selectedStatus = shallowRef<EnumBookStatus | null>(null)

const filteredBooks = computed(() => {
  let list = booksStore.books

  if (searchText.value.trim()) {
    list = list.filter(book =>
      book.title.toLowerCase().includes(searchText.value.toLowerCase())
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
      <div class="text-2xl font-bold">Books</div>
      <div class="flex gap-6">
        <InputGroup class="w-[350px] h-[44px] border-grayBorderLight text-textThird">
          <InputGroupInput v-model="searchText" placeholder="Search" :icon="searchIcon" />
        </InputGroup>
        <book-status-select v-model="selectedStatus" />
      </div>
    </div>
    <div class="flex flex-wrap gap-10">
      <book-item v-for="item in filteredBooks" :key="item.id" :item="item" />
    </div>
    <book-pagination />
  </div>
</template>