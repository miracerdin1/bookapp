import { useBooksStore } from '@/stores/books'
import { BookItemModel, EnumBookStatus } from '@/types'
import bookImg from '@/assets/images/Sun Rise Of The Reaping.png'
import { toast } from '@/components/ui/toast'

export const DEFAULT_FORM_DATA: Partial<BookItemModel> = {
    title: '',
    author: '',
    totalPage: 0,
    status: EnumBookStatus.NotStarted,
    readPage: 0,
    img: bookImg,
}

export function useBookForm() {
    const booksStore = useBooksStore()

    const normalizeBook = (data: Partial<BookItemModel>): BookItemModel => {
        return {
            id: data.id ?? Date.now(),
            title: data.title ?? "",
            content: data.content ?? '',
            img: data.img ?? '',
            status: data.status ?? EnumBookStatus.NotStarted,
            totalPage: data.totalPage || 0,
            explanation: data.title || 'No description',
            author: data.author || 'Unknown',
            readPage: data.readPage ?? 0,
            progress: data.totalPage
                ? `${Math.round(((data.readPage ?? 0) / data.totalPage) * 100)}%`
                : '0%',
            isFavorite: data.isFavorite ?? false,
        }
    }
    const addBook = (data: Partial<BookItemModel>) => {
        const book = normalizeBook(data)
        booksStore.addBook(book)
        toast({
            description: "Book has been successfully added.",
            class: "bg-toastSuccess"
        })
    }

    const updateBook = (data: Partial<BookItemModel>) => {
        const book = normalizeBook(data)
        booksStore.updateBook(book.id, book)
        toast({
            description: "The book has been successfully removed.",
            class: "bg-toastSuccess "
        })
    }

    const deleteBook = (id: number) => {
        booksStore.removeBook(id)
        toast({
            description: "Book has been successfully removed from list.",
            class: "bg-toastSuccess"
        })
    }

    return {
        addBook,
        updateBook,
        deleteBook
    }
}
