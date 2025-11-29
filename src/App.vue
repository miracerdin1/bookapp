<template>
  <div class="min-h-screen bg-gray-50">
    <main class="">
      <book-header />
      <Home />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BookHeader from './components/BookHeader.vue'
import Home from './pages/Home.vue'
import { useBooksStore } from './stores/books'

const booksStore = useBooksStore()

onMounted(() => {
  booksStore.load()
})
</script>
