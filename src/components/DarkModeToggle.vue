<script lang="ts" setup>
import { ref } from 'vue';

const saved = localStorage.getItem("theme");

const isDark = ref(saved === "dark");

if (isDark.value) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

const toggleTheme = () => {
    isDark.value = !isDark.value;

    if (isDark.value) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
};
</script>

<template>
    <button @click="toggleTheme" class="px-4 py-2 rounded-md border border-secondary dark:border-gray-600
               bg-white dark:bg-black text-black dark:text-textSecondary transition">
        {{ isDark ? "🌞 Light" : "🌛 Dark" }}
    </button>
</template>
