
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

  const totalReadPages = computed(() =>
    store.books.reduce((sum, book) => {
      if (book.status === EnumBookStatus.Completed) {
        return sum + (book.totalPage || 0)
      }
      if (book.status === EnumBookStatus.InProgress) {
        return sum + (book.readPage || 0)
      }
      return sum
    }, 0)
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
    notStartedBooks,
    totalReadPages
  }
}
