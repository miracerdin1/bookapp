<template>
  <div class="bg-gray-50 p-4 rounded">
    <h2 class="font-semibold mb-2">Add Book</h2>
    <form @submit.prevent="onSubmit" class="space-y-3">
      <div>
        <label class="block text-sm mb-1">Title *</label>
        <input v-model="title" class="w-full border rounded px-3 py-2" />
        <p v-if="error" class="text-red-600 text-sm mt-1">{{ error }}</p>
      </div>
      <div>
        <label class="block text-sm mb-1">Author</label>
        <input v-model="author" class="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm mb-1">Pages</label>
        <input v-model.number="pages" type="number" class="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label class="block text-sm mb-1">Status</label>
        <select v-model="status" class="w-full border rounded px-3 py-2">
          <option value="todo">To Read</option>
          <option value="reading">Reading</option>
          <option value="done">Completed</option>
        </select>
      </div>
      <div class="flex gap-2">
        <button class="bg-primary text-white px-4 py-2 rounded" type="submit">Save</button>
        <button type="button" class="px-4 py-2 border rounded" @click="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBooks } from '@/composables/useBooks'

const { addBook } = useBooks()

const title = ref('')
const author = ref('')
const pages = ref<number|null>(null)
const status = ref('todo')
const error = ref('')

function reset() {
  title.value = ''
  author.value = ''
  pages.value = null
  status.value = 'todo'
  error.value = ''
}

function onSubmit() {
  if (!title.value.trim()) {
    error.value = 'Title is required'
    return
  }
  addBook({
    title: title.value.trim(),
    author: author.value?.trim() || '',
    pages: pages.value ?? undefined,
    status: status.value,
  })
  reset()
}
</script>
