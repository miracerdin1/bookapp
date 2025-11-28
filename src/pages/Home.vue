<template>
  <div class="bg-white rounded-lg shadow">
    <divider></divider>
    <favorite-books class="mx-auto" />
    <book-list class="mx-auto" />
    <book-footer />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBooks } from '@/composables/useBooks'
import BookForm from '@/components/BookForm.vue'
import BookList from '@/components/BookList.vue'
import FavoriteSlider from '@/components/FavoriteSlider.vue'
import SummaryCards from '@/components/SummaryCards.vue'
import Divider from '@/components/Divider.vue'
import FavoriteBooks from '@/components/FavoriteBooks.vue'
import BookFooter from '@/components/BookFooter.vue'

const { books, favorites, addBook, updateBook, deleteBook } = useBooks()

const search = ref('')
const filteredValue = ref('')

const filteredBooks = computed(() => {
  return books.value?.filter(b => {
    const q = search.value.trim().toLowerCase()
    if (q) {
      if (!(b.title.toLowerCase().includes(q) || (b.author || '').toLowerCase().includes(q))) return false
    }
    if (filteredValue.value) {
      return b.status === filteredValue.value
    }
    return true
  })
})

function onEdit(bookId: number) {
  // emit or handle edit - delegated to store via composable
}

function onDelete(bookId: number) {
  // delegated
}
</script>
