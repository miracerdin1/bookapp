
import { useBooksStore } from '@/stores/books'
import { EnumBookStatus } from '@/types'
import { computed } from 'vue'


export function useBooks() {
  const store = useBooksStore()
  const totalBooks = computed(() => store.books.length)

  const completedBooks = computed(() =>
    store.books.filter(b => b.status === EnumBookStatus.Completed).length
  )

  const inProgressBooks = computed(() =>
    store.books.filter(b => b.status === EnumBookStatus.InProgress).length
  )

  const notStartedBooks = computed(() =>
    store.books.filter(b => b.status === EnumBookStatus.NotStarted).length
  )
  return {
    books: store.books,
    favorites: store.favorites,
    addBook: store.addBook,
    updateBook: store.updateBook,
    removeBook: store.removeBook,
    toggleFavorite: store.toggleFavorite,
    load: store.load,
    totalBooks,
    completedBooks,
    inProgressBooks,
    notStartedBooks
  }
}
