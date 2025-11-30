<template>
  <div class="flex gap-4 mt-2 dark:text-textSecondary text-sm">
    <span class="pr-3 py-1 bg-gray-200 rounded">Total: {{ totalBooks }}</span>
    <span class="px-3 py-1 rounded" :class="getStatusClass(EnumBookStatus.Completed)">Completed: {{ completedBooks
      }}</span>
    <span class="px-3 py-1 rounded" :class="getStatusClass(EnumBookStatus.InProgress)">Reading: {{ inProgressBooks
      }}</span>
    <span class="px-3 py-1 rounded" :class="getStatusClass(EnumBookStatus.NotStarted)">To Read: {{
      notStartedBooks }}</span>
  </div>
</template>

<script setup lang="ts">
import { useBooks } from '@/composables/useBooks'
import { useBookStatus } from '@/composables/useBookStatus';
import { EnumBookStatus } from '@/types';

const { getStatusClass } = useBookStatus();

const { totalBooks, completedBooks, inProgressBooks, notStartedBooks } = useBooks()
</script>
