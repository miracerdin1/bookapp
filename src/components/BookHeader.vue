<template>
    <header class="h-[105px] custom-header flex items-center justify-between bg-white">
        <!-- Left Logo + Nav -->
        <div class="flex items-center gap-10">
            <!-- Logo -->
            <div class="flex items-center gap-3 cursor-pointer">
                <img :src="Logo" alt="Bookapp Logo" class="w-size-md h-size-lg" />
                <span class="font-nunito font-bold text-[20px] text-textPrimary title">Bookapp</span>
            </div>

            <!-- Navigation -->
            <nav class="flex items-center gap-3">
                <a v-for="item in navItems" :key="item.label" href="#" :class="[
                    'text-base',
                    item.active ? 'px-4 py-[10px] text-primary font-semibold border-b-2 border-secondary' : 'text-black'
                ]">
                    {{ item.label }}
                </a>
            </nav>
        </div>

        <!-- Right Buttons -->
        <div class="flex items-center gap-4">
            <!-- Add Book Form -->
            <button class="font-bold border-2 rounded-lg text-[14px] text-secondary py-[7px] px-4 border-secondary">
                Add book form
            </button>

            <!-- Login Button -->
            <Button class="bg-secondary text-white px-6 py-2 rounded-lg text-[14px] hover:bg-buttonHover transition">
                Login
            </Button>
        </div>
    </header>
</template>

<script setup lang="ts">
import Logo from '@/assets/icons/Logo.svg';
import Button from './ui/button/Button.vue';

const navItems = [
    { label: "About", active: false },
    { label: "Books", active: true },
];
</script>

<style scoped lang="scss">
@use '@/styles/colors' as *;

.custom-header {
    border-bottom: 1px solid $border-light;
    padding: 26px 114px;
    height: 105px;
    width: 100%;
}

.title {
    color: #141B2E;

}
</style>
