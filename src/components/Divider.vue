<template>
    <div class="h-[48px] flex justify-center items-center bg-divider font-inter font-bold text-base text-secondary">
        {{ totalBooks }} books
        <span class="font-inter font-normal mx-1 text-black">and</span>
        {{ totalReadPages.toLocaleString() }} pages have been read.
    </div>
</template>

<script setup lang="ts">
import { useBooks } from '@/composables/useBooks'

const { totalBooks, totalReadPages } = useBooks()
</script>