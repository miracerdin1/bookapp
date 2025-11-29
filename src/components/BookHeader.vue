<template>
    <header class="h-[105px] custom-header flex items-center justify-between bg-white dark:bg-black">
        <!-- Left Logo + Nav -->
        <div class="flex items-center gap-10 ">
            <!-- Logo -->
            <div class="flex items-center gap-3 cursor-pointer" @click="goHome">
                <img :src="Logo" alt="Bookapp Logo" class="w-size-md h-size-lg" />
                <span
                    class="font-nunito font-bold text-[20px] text-textPrimary title dark:text-textSecondary">Bookapp</span>
            </div>

            <!-- Navigation -->
            <nav class="flex items-center gap-3">
                <router-link v-for="item in navItems" :key="item.label" :to="item.to" class="text-base" :class="[
                    item.active
                        ? 'px-4 py-[10px] text-primary font-semibold border-b-2 border-secondary dark:text-textSecondary'
                        : 'text-black dark:text-textSecondary'
                ]">
                    {{ item.label }}
                </router-link>

            </nav>
        </div>

        <!-- Right Buttons -->
        <div class="flex items-center gap-4">
            <DarkModeToggle />
            <!-- Add Book Form -->
            <Button variant="outline"
                class="font-bold border-2 rounded-lg text-[14px] text-secondary py-[7px] px-4 border-secondary"
                @click="isModalOpen = true">

                Add book form

            </Button>
            <book-form-modal v-if="isModalOpen" v-model:open="isModalOpen" />

            <!-- Login Button -->
            <Button class="bg-secondary text-white px-6 py-2 rounded-lg text-[14px] hover:bg-buttonHover transition">
                Login
            </Button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/assets/icons/Logo.svg'
import Button from './ui/button/Button.vue'
import BookFormModal from './BookFormModal.vue'
import DarkModeToggle from './DarkModeToggle.vue'
import { useRouter } from 'vue-router'

const isModalOpen = ref(false)

const navItems = [
    { label: "About", active: false, to: "/about" },
    { label: "Books", active: true, to: "/" },
]

const router = useRouter()

function goHome() {
    router.push('/')
}
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
