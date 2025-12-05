<template>
    <header
        class="sticky border-b border-b-grayLight top-0 z-50 h-[105px] flex items-center justify-between bg-white dark:bg-black px-4 sm:px-6 md:px-10 lg:px-[114px] flex-col md:flex-row">
        <div class="flex items-center gap-10 ">
            <div class="flex items-center gap-3 cursor-pointer" @click="goHome">
                <img :src="Logo" alt="Bookapp Logo" class="w-size-md h-size-lg" />
                <span
                    class="font-nunito font-bold text-[20px] text-textPrimary title dark:text-textSecondary">Bookapp</span>
            </div>
            <nav class="flex items-center gap-3">
                <router-link v-for="item in navItems" :key="item.label" :to="item.to" class="text-base px-4 py-[10px]"
                    :class="[
                        'text-black dark:text-textSecondary',
                        $route.path === item.to
                            ? 'text-primary font-semibold border-b-2 border-secondary dark:text-textSecondary'
                            : ''
                    ]">
                    {{ item.label }}
                </router-link>
            </nav>
        </div>
        <div class="flex items-center gap-4">
            <DarkModeToggle />
            <Button variant="outline"
                class="font-bold border-2 rounded-lg text-sm text-secondary py-[7px] px-4 border-secondary"
                @click="isModalOpen = true">
                Add book form
            </Button>
            <book-form-modal v-if="isModalOpen" v-model:open="isModalOpen" />
            <Button class="bg-secondary text-white px-6 py-2 rounded-lg text-sm hover:bg-buttonHover transition">
                Login
            </Button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/assets/icons/Logo.svg'
import Button from '@/components/ui/button/Button.vue'
import BookFormModal from '@/components/book/BookFormModal.vue'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import { useRouter } from 'vue-router'

const isModalOpen = ref(false)

const navItems = [
    { label: "About", to: "/about" },
    { label: "Books", to: "/" },
]

const router = useRouter()

const goHome = () => {
    router.push('/')
}
</script>

<style scoped lang="scss">
@use '@/styles/colors' as *;

.custom-header {
    border-bottom: 1px solid $border-light;
    width: 100%;
}

.title {
    color: #141B2E;

}
</style>
