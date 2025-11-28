<template>
  <div class="grid grid-cols-3 gap-3">
    <div class="p-3 bg-white border rounded text-center">
      <div class="text-sm text-gray-500">Total</div>
      <div class="font-semibold">{{ total }}</div>
    </div>
    <div class="p-3 bg-white border rounded text-center">
      <div class="text-sm text-gray-500">Reading</div>
      <div class="font-semibold">{{ reading }}</div>
    </div>
    <div class="p-3 bg-white border rounded text-center">
      <div class="text-sm text-gray-500">Completed</div>
      <div class="font-semibold">{{ completed }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBooks } from '@/composables/useBooks'

const { books } = useBooks()

const total = computed(() => books.value?.length)
const reading = computed(() => books.value?.filter(b => b.status === 'reading')?.length)
const completed = computed(() => books.value?.filter(b => b.status === 'done')?.length)
</script>
