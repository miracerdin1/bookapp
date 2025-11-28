<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Input } from '@/components/ui/input'
import { useAttrs } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes["class"]
  icon?: string
}>()

const attrs = useAttrs()
</script>

<template>
  <div class="relative flex items-center flex-1">
    <span v-if="icon" class="absolute left-3 flex items-center pointer-events-none z-10">
      <slot name="icon">
        <img :src="icon" alt="icon" class="w-5 h-5" />
      </slot>
    </span>
    <Input v-bind="attrs" data-slot="input-group-control" :class="cn(
      'flex-1 rounded-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent ring-offset-transparent dark:bg-transparent',
      icon ? 'pl-10' : '',
      props.class,
    )" />
  </div>
</template>
