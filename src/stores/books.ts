import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export type Book = {
  id: string,
  title: string,
  author?: string,
  pages?: number,
  status: 'todo'|'reading'|'done',
  favorite?: boolean
}

export const useBooksStore = defineStore('books', () => {
  const books: Ref<Book[]> = ref([])
  function persist() {
    try {
      localStorage.setItem('bookapp.books', JSON.stringify(books.value))
    } catch {}
  }
  function load() {
    try {
      const raw = localStorage.getItem('bookapp.books')
      if (raw) books.value = JSON.parse(raw)
    } catch {}
  }
  function addBook(payload: Partial<Book>) {
    const id = String(Date.now())
    books.value.unshift({
      id,
      title: payload.title || 'Untitled',
      author: payload.author || '',
      pages: payload.pages,
      status: (payload.status as any) || 'todo',
      favorite: false
    })
    persist()
  }
  function updateBook(id: string, patch: Partial<Book>) {
    const idx = books.value.findIndex(b=>b.id===id)
    if (idx>=0) {
      books.value[idx] = { ...books.value[idx], ...patch }
      persist()
    }
  }
  function removeBook(id: string) {
    books.value = books.value.filter(b=>b.id!==id)
    persist()
  }
  function toggleFavorite(id: string) {
    const b = books.value.find(x=>x.id===id)
    if (!b) return
    b.favorite = !b.favorite
    // move to front if favorite
    if (b.favorite) {
      books.value = [b, ...books.value.filter(x=>x.id!==id)]
    }
    persist()
  }
  const favorites = ref([] as Book[])
  return { books, favorites, addBook, updateBook, removeBook, toggleFavorite, load }
})
