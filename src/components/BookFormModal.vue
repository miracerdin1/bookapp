<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import BookStatusSelect from './BookStatusSelect.vue'


</script>

<template>
    <Dialog>
        <form>
            <DialogTrigger as-child>
                <Button variant="outline"
                    class="font-bold border-2 rounded-lg text-[14px] text-secondary py-[7px] px-4 border-secondary">

                    Add book form

                </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle class="font-bold text-base text-textThird border-b pb-3 border-b-grayBorderLight">Book
                        entry form
                    </DialogTitle>
                    <DialogDescription class="font-roboto text-sm">
                        Fill out the fields below to add a new book to the library system.
                    </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4">

                    <Input id="name-1" name="bookTitle" default-value="Book title"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />
                    <Input id="author-1" name="author" default-value="Author"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />
                    <Input id="pages" name="pages" default-value="Total number of page"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />
                    <book-status-select />
                    <Input id="readPage" name="readPage" default-value="Number of pages read"
                        class="rounded-lg border h-11 border-grayBorderLight text-textThird" />


                </div>
                <DialogFooter>
                    <DialogClose as-child class="w-full text-white">
                        <Button type="submit"
                            class="bg-secondary text-white px-6 py-2 rounded-lg text-[14px] hover:bg-buttonHover transition">
                            Add book
                        </Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
</template>
