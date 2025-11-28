import { ref } from 'vue'
import { useBooksStore } from '@/stores/books'
import type { Book } from '@/stores/books'

export function useBooks() {
  const store = useBooksStore()
  return {
    books: store.books,
    favorites: store.favorites,
    addBook: store.addBook,
    updateBook: store.updateBook,
    removeBook: store.removeBook,
    toggleFavorite: store.toggleFavorite,
    load: store.load,
  }
}
