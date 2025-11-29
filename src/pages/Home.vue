<template>
  <div class="bg-white dark:bg-black rounded-lg shadow">
    <divider></divider>
    <favorite-books class="mx-auto" />
    <book-list class="mx-auto" />
    <book-footer />
  </div>
</template>

<script setup lang="ts">
import BookList from '@/components/BookList.vue'
import Divider from '@/components/Divider.vue'
import FavoriteBooks from '@/components/FavoriteBooks.vue'
import BookFooter from '@/components/BookFooter.vue'


</script>
