<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

onMounted(() => {
    // Sayfa yüklenince localStorage'dan oku
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.documentElement.classList.add("dark");
        isDark.value = true;
    }
});

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
    <button @click="toggleTheme" class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600
           bg-white dark:bg-black text-black dark:text-textSecondary transition">
        {{ isDark ? "🌛 Dark" : "🌞 Light" }}
    </button>
</template>
