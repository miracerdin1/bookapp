import { ref } from 'vue'
import { useBooksStore } from '@/stores/books'
import { BookItemModel, EnumBookStatus } from '@/types'
import bookImg from '@/assets/images/Sun Rise Of The Reaping.png'

export const DEFAULT_FORM_DATA: Partial<BookItemModel> = {
    title: '',
    author: '',
    totalPage: 0,
    status: EnumBookStatus.NotStarted,
    readPage: 0,
    img: bookImg
}

export function useBookForm() {
    const booksStore = useBooksStore()

    function submitBook(data: Partial<BookItemModel>) {
        const newBook: BookItemModel = {
            id: data.id ?? Date.now(),
            title: data.title || 'Untitled',
            content: '',
            img: data.img ?? "",
            status: data.status ?? EnumBookStatus.NotStarted,
            totalPage: data.totalPage || 0,
            explanation: data.title || 'No description',
            author: data.author || 'Unknown',
            readPage: data.readPage ?? 0,
            progress: !!data.totalPage
                ? `${Math.round(((data.readPage ?? 0) / data.totalPage) * 100)}%`
                : '0%',
            isFavorite: false
        }
        booksStore.addBook(newBook)

    }

    return {
        submitBook,
    }
}
