<template>
    <Select class="border-grayBorderLight">
        <SelectTrigger class="w-[180px] border-grayBorderLight w-[200px] h-[44px] ">
            <SelectValue class="text-textThird " placeholder="Reading status" />
        </SelectTrigger>
        <SelectContent class="bg-white border border-gray-200 rounded-md shadow-md border border-grayBorderLight">
            <SelectGroup class="">
                <select-item v-for="item in selectItems" :key="item.value" :value="item.value"
                    class=" hover:bg-selectHover hover:text-secondary">
                    {{ item.text }}
                </select-item>

            </SelectGroup>
        </SelectContent>
    </Select>
</template>
<script lang="ts" setup>
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { EnumBookStatus, SelectModel } from '@/types';



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