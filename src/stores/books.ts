import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { BookItemModel } from '@/types'
import { EnumBookStatus } from '@/types'

const STORAGE_KEY = 'bookapp.books'

export const useBooksStore = defineStore('books', () => {
  const books = ref<BookItemModel[]>([])

  // Load from localStorage on init
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        books.value = JSON.parse(raw)
      }
    } catch (error) {
      console.error('Failed to load books:', error)
    }
  }

  // Persist to localStorage (debounced for performance)
  let persistTimer: ReturnType<typeof setTimeout> | null = null
  function persist() {
    if (persistTimer) clearTimeout(persistTimer)
    persistTimer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books.value))
      } catch (error) {
        console.error('Failed to save books:', error)
      }
    }, 300)
  }

  function addBook(payload: Omit<BookItemModel, 'id'> | BookItemModel) {
    const newBook: BookItemModel = {
      ...payload,
      id: 'id' in payload ? payload.id : Date.now(),
      isFavorite: payload.isFavorite ?? false,
    }
    books.value.unshift(newBook)
    persist()
  }

  function updateBook(id: number, patch: Partial<BookItemModel>) {
    const idx = books.value.findIndex(b => b.id === id)
    console.log('Updating book:', id, 'found at index:', idx, 'patch:', patch)
    if (idx >= 0) {
      books.value[idx] = { ...books.value[idx], ...patch }
      console.log('Updated book:', books.value[idx])
      persist()
    } else {
      console.error('Book not found with id:', id)
    }
  }

  function removeBook(id: number) {
    books.value = books.value.filter(b => b.id !== id)
    persist()
  }

  function toggleFavorite(id: number) {
    const book = books.value.find(b => b.id === id)
    if (book) {
      book.isFavorite = !book.isFavorite
      persist()
    }
  }

  // Computed for favorites (cached)
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
