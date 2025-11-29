<template>
  <div class="min-h-screen bg-gray-50">
    <main>
      <Toaster />
      <book-header />
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BookHeader from './components/BookHeader.vue'
import { useBooksStore } from './stores/books'
import Toaster from '@/components/ui/toast/Toaster.vue'

const booksStore = useBooksStore()

onMounted(() => {
  booksStore.load()
})
</script>
