<template>
    <div class="p-6 gap-5 rounded-radius bg-gray max-w-[1360px] mt-[40px]">
        <div class="flex">
            <div class="font-inter font-bold text-xl">Favorite Books</div>
            <div class="ml-auto flex items-center gap-3">
                <span class="text-textThird">View All (13)</span>
                <span
                    class="p-3 rounded-full border border-grayBorderLight hover:bg-hoverArrow cursor-pointer transition w-10 h-10">
                    <img src="@/assets/icons/arrow-left.svg" alt="left" class="w-3 h-3" />
                </span>
                <span
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
                <Carousel>
                    <CarouselContent class="relative w-full flex gap-[32px]" :opts="{
                        align: 'start',
                    }">
                        <CarouselItem v-for="item in items" class="basis-[calc(50%-16px)] flex-shrink-0">
                            <div class="p-1">
                                <Card>
                                    <CardContent class="flex gap-[22px] h-full">
                                        <img :src="item.img" alt="img" class="w-[200px] h-[258px]" />
                                        <div class="flex gap-[12px] px-2 flex-col w-[184px]">
                                            <div>
                                                <span class="px-[10px] py-[6px] rounded-[4px] text-xs"
                                                    :class="getStatusClass(item.status)">{{
                                                        getStatusText(item.status) }}
                                                </span>
                                            </div>
                                            <div class="font-bold text-sm">{{ item.explanation }}</div>
                                            <div class="flex flex-col gap-[12px]">
                                                <div class="flex flex-col gap-[8px]">
                                                    <div
                                                        class=" flex item-center gap-[6px] text-textThird  text-sm font-medium">
                                                        <span class="flex items-center"><img
                                                                src="@/assets/icons/user.svg" /></span>{{ item.user
                                                                }}
                                                    </div>
                                                    <div class="text-textThird text-sm font-medium"> {{
                                                        `${item.readPage}pages` }}</div>
                                                </div>
                                                <div>
                                                    <Button variant="outline"
                                                        class="bg-secondary text-white p-[10px] w-full">
                                                        Update Info
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
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
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { ref, computed } from 'vue';
import bookImg from '@/assets/images/Sun Rise Of The Reaping.png';
import SecondCardImage from "@/assets/images/The Let Them.png"
import Button from './ui/button/Button.vue';
import { EnumBookStatus } from '@/types';

const getStatusClass = (status: EnumBookStatus) => {
    if (status === EnumBookStatus.Completed) return 'bg-completed';
    if (status === EnumBookStatus.InProgress) return 'bg-reading text-white';
    if (status === EnumBookStatus.NotStarted) return 'bg-toRead text-white';
    return '';
};

const getStatusText = (status: EnumBookStatus) => {
    if (status === EnumBookStatus.Completed) return 'Completed';
    if (status === EnumBookStatus.InProgress) return 'Reading';
    if (status === EnumBookStatus.NotStarted) return 'To Read';
    return '';
};

const items = ref([
    {
        id: 1,
        title: 'Item 1',
        content: 'Content for Item 1',
        img: bookImg,
        status: EnumBookStatus.Completed,
        explanation: "Dating and Dragons",
        user: "Tedd",
        readPage: 115
    },
    {
        id: 2,
        title: 'Item 2',
        content: 'Content for Item 2',
        img: SecondCardImage,
        status: EnumBookStatus.InProgress,
        explanation: "The Ten Thousand Doors of January",
        user: "Tedd",
        readPage: 115
    },
    {
        id: 3,
        title: 'Item 3',
        content: 'Content for Item 3',
        img: bookImg,
        status: EnumBookStatus.NotStarted,
        explanation: "Dating and Dragons",
        user: "Tedd",
        readPage: 115
    },
    {
        id: 4,
        title: 'Item 4',
        content: 'Content for Item 4',
        img: SecondCardImage,
        status: EnumBookStatus.Completed,
        explanation: "The Ten Thousand Doors of January",
        user: "Tedd",
        readPage: 115
    },
    {
        id: 5,
        title: 'Item 5',
        content: 'Content for Item 5',
        img: bookImg,
        status: EnumBookStatus.InProgress,
        explanation: "The Ten Thousand Doors of January",
        user: "Tedd",
        readPage: 115
    },
])
</script>