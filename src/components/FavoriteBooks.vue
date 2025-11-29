<template>
    <div class="p-6 gap-5 rounded-radius bg-gray max-w-[1360px] mt-[40px]">
        <div class="flex">
            <div class="font-inter font-bold text-xl">Favorite Books</div>
            <div class="ml-auto flex items-center gap-3">
                <span class="text-textThird">View All {{ bookItems?.length }}</span>
                <span @click="carouselRef?.scrollPrev()"
                    class="p-3 rounded-full border border-grayBorderLight hover:bg-hoverArrow cursor-pointer transition w-10 h-10">
                    <img src="@/assets/icons/arrow-left.svg" alt="left" class="w-3 h-3" />
                </span>
                <span @click="carouselRef?.scrollNext()"
                    class="p-3 rounded-full border border-grayBorderLight hover:bg-hoverArrow cursor-pointer transition w-10 h-10">
                    <img src="@/assets/icons/arrow-right.svg" alt="right" class="w-3 h-3" />
                </span>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <div class="col-span-1 text-textThird leading-[140%]">
                When Maya’s brother decides to get married in Taormina, she and Conor end up stuck together in a
                romantic Sicilian villa for over a week. There, on the beautiful Ionian coast, between ancient ruins,
                delicious foods, and natural caves, Maya realizes that Conor might be hiding something from her. And as
                the destination wedding begins to erupt out of control, she decides that a summer fling might be just
                what she needs—even if it’s a problematic one.
            </div>
            <div class="col-span-2">
                <Carousel ref="carouselRef">
                    <CarouselContent class="relative w-full flex gap-[32px]" :opts="{
                        align: 'start',
                    }">
                        <CarouselItem v-for="item in bookItems" class="basis-[calc(50%-16px)] flex-shrink-0">
                            <div class="p-1">
                                <book-item :item="item" isFavorite />
                            </div>
                        </CarouselItem>

                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import { ref, computed } from 'vue';

import BookItem from './BookItem.vue';
import { useBooksStore } from '@/stores/books';

const carouselRef = ref<any>(null)
const booksStore = useBooksStore()

const bookItems = computed(() => booksStore.books.filter(book => book.isFavorite))

</script>