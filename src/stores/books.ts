import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { BookItemModel } from '@/types'
import { EnumBookStatus } from '@/types'

const STORAGE_KEY = 'bookapp.books'

export const useBooksStore = defineStore('books', () => {
  const books = ref<BookItemModel[]>([])

  const load = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        books.value = JSON.parse(raw)
      }
    } catch (error) {
      console.error('Failed to load books:', error)
    }
  }

  const persist = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books.value))
    } catch (error) {
      console.error('Failed to save books:', error)
    }
  }

    const addBook = (payload: BookItemModel) => {
        books.value.unshift(payload)
        persist()
    }

  const updateBook = (id: number, patch: Partial<BookItemModel>) => {
    const idx = books.value.findIndex(b => b.id === id)
    if (idx >= 0) {
      books.value[idx] = { ...books.value[idx], ...patch }
      persist()
    } else {
      console.error('Book not found with id:', id)
    }
  }

  const removeBook = (id: number) => {
    books.value = books.value.filter(b => b.id !== id)
    persist()
  }

  const toggleFavorite = (id: number) => {
    const book = books.value.find(b => b.id === id)
    if (book) {
      book.isFavorite = !book.isFavorite
      persist()
    }
  }

  const favorites = computed(() => books.value.filter(b => b.isFavorite))

  return {
    books,
    favorites,
    addBook,
    updateBook,
    removeBook,
    toggleFavorite,
    load
  }
})
