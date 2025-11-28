<template>
  <div v-if="favorites && favorites.length" class="mb-4">
    <h4 class="font-medium mb-2">Favorites</h4>
    <div class="flex gap-3 overflow-x-auto">
      <div v-for="f in favorites" :key="f.id" class="min-w-[180px] bg-white border rounded p-3">
        <div class="font-semibold">{{f.title}}</div>
        <div class="text-sm text-gray-500">{{f.author}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  favorites: { type: Array, default: () => [] }
})
</script>
