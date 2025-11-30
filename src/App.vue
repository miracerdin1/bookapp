<template>
  <div class="flex flex-col min-h-screen">
    <Toaster />
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './layouts/Header.vue'
import { useBooksStore } from './stores/books'
import Toaster from '@/components/ui/toast/Toaster.vue'
import Footer from './layouts/Footer.vue'

const booksStore = useBooksStore()

onMounted(() => {
  booksStore.load()
})
</script>
