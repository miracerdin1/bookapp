<template>
  <div class="bg-white dark:bg-black shadow pb-[120px]">
    <divider></divider>
    <favorite-books class="mx-auto" />
    <book-list class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import BookList from '@/components/book/BookList.vue';
import Divider from '@/components/Divider.vue'
import FavoriteBooks from '@/components/book/FavoriteBooks.vue'
</script>
