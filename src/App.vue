<template>
  <div class="min-h-screen bg-gray-50">
    <main class="">
      <book-header />
      <Home />
    </main>
  </div>
</template>

<script setup lang="ts">
import BookHeader from './components/BookHeader.vue'
import Home from './pages/Home.vue'
</script>
