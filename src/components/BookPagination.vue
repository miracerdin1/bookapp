<script setup lang="ts">
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { BookItemModel } from '@/types';

const props = defineProps<{
    items: BookItemModel[];
    itemsPerPage: number;
}>()

const emit = defineEmits(["change"])
</script>

<template>
    <div class="flex flex-col gap-6">
        <Pagination v-slot="{ page }" :items-per-page="itemsPerPage" :total="items?.length" :default-page="1">
            <PaginationContent v-slot="{ items }" class="flex gap-3">
                <PaginationPrevious />
                <template v-for="(item, index) in items" :key="index">
                    <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page"
                        @click="emit('change', item.value)"
                        class="border border-grayBorderLight rounded-lg text-textThird" :class="item.value === page
                            ? 'bg-black text-white'
                            : 'bg-white text-black'">
                        {{ item.value }}
                    </PaginationItem>
                </template>
                <PaginationNext />
            </PaginationContent>
        </Pagination>
    </div>
</template>
