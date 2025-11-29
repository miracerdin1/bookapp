<template>
    <Select v-model="selectedValue" class="border-grayBorderLight">
        <SelectTrigger class="w-[180px] border-grayBorderLight w-[200px] h-[44px] ">
            <SelectValue class="text-textThird " placeholder="Reading status" />
        </SelectTrigger>
        <SelectContent class="bg-white border border-gray-200 rounded-md shadow-md border border-grayBorderLight">
            <SelectGroup>
                <select-item v-if="!hideAll" :value="null" class="hover:bg-selectHover hover:text-secondary">
                    All
                </select-item>
                <select-item v-for="item in selectItems" :key="item.value" :value="item.value"
                    class=" hover:bg-selectHover hover:text-secondary">
                    {{ item.text }}
                </select-item>

            </SelectGroup>
        </SelectContent>
    </Select>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { EnumBookStatus, SelectModel } from '@/types'

const props = defineProps<{
    modelValue?: EnumBookStatus | null
    hideAll?: boolean
}>()

const emit = defineEmits<{
    'update:modelValue': [value: EnumBookStatus]
}>()

const selectedValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value as EnumBookStatus)
})

const selectItems: SelectModel[] = [
    {
        value: EnumBookStatus.Completed,
        text: 'Completed'
    },
    {
        value: EnumBookStatus.InProgress,
        text: 'In Progress'
    },
    {
        value: EnumBookStatus.NotStarted,
        text: 'Not Started'
    }
]


</script>