import { describe, it, expect, vi } from "vitest"
import { useBookForm } from "@/composables/useBookForm"
import { useBooksStore } from "@/stores/books"
import { EnumBookStatus } from "@/types"
import { toast } from "@/components/ui/toast"

vi.mock("@/components/ui/toast", () => ({
    toast: vi.fn()
}))

describe("useBookForm", () => {

    it("adds a book successfully", () => {
        const { addBook } = useBookForm()
        const booksStore = useBooksStore()

        expect(booksStore.books.length).toBe(0)

        addBook({
            title: "Test Book",
            author: "John",
            totalPage: 100,
            readPage: 50,
            status: EnumBookStatus.InProgress
        })

        expect(booksStore.books.length).toBe(1)
        expect(booksStore.books[0].title).toBe("Test Book")
        expect(booksStore.books[0].progress).toBe("50%")

        // toast çağrıldı mı?
        expect(toast).toHaveBeenCalled()
        expect(toast).toHaveBeenCalledWith(
            expect.objectContaining({
                description: "Book has been successfully added."
            })
        )
    })

})
