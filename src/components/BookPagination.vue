<script setup lang="ts">
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import Select from './ui/select/Select.vue';
import SelectContent from './ui/select/SelectContent.vue';
import SelectTrigger from './ui/select/SelectTrigger.vue';
import SelectGroup from './ui/select/SelectGroup.vue';
import SelectValue from './ui/select/SelectValue.vue';
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <Select class="border-grayBorderLight ">
                    <SelectTrigger class="w-[180px] rounded-lg border-grayBorderLight w-[200px] h-[44px]">
                        <SelectValue class="text-textThird" placeholder="Bulk actions" />
                    </SelectTrigger>
                    <SelectContent class="bg-white border border-gray-200 rounded-md shadow-md">
                        <SelectGroup>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button class="border border-grayBorderLight w-[80px] h-[44px] rounded-lg text-textThird"
                    variant="outline">Apply</Button>
                <span class="text-textThird">Selected 3 entries</span>
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex gap-3 items-center justify-end">
                    <span class="text-textThird">Show</span>
                    <Select class="border-grayBorderLight ">
                        <SelectTrigger class="w-[180px] rounded-lg border-grayBorderLight w-[70px] h-[44px]">
                            <SelectValue class="text-textThird" placeholder="25" />
                        </SelectTrigger>
                        <SelectContent class="bg-white border border-gray-200 rounded-md shadow-md">
                            <SelectGroup>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div class="text-textThird">Show 1 to 100 of 433 entries</div>
            </div>
        </div>
        <Pagination v-slot="{ page }" :items-per-page="10" :total="30" :default-page="2">
            <PaginationContent v-slot="{ items }">
                <PaginationPrevious />

                <template v-for="(item, index) in items" :key="index">
                    <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page">
                        {{ item.value }}
                    </PaginationItem>
                </template>

                <PaginationEllipsis :index="4" />

                <PaginationNext />
            </PaginationContent>
        </Pagination>
    </div>
</template>
