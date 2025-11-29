<script setup lang="ts">
import Select from './ui/select/Select.vue';
import SelectContent from './ui/select/SelectContent.vue';
import SelectTrigger from './ui/select/SelectTrigger.vue';
import SelectGroup from './ui/select/SelectGroup.vue';
import SelectValue from './ui/select/SelectValue.vue';
</script>

<template>
    <div class="flex justify-between items-center ">
        <div class="flex gap-3 items-center">
            <Select class="border-grayBorderLight ">
                <SelectTrigger class="w-[180px] rounded-lg border-grayBorderLight w-[200px] h-[44px]">
                    <SelectValue class="text-textThird" placeholder="Bulk actions" />
                </SelectTrigger>
                <SelectContent class="bg-white border border-gray-200 rounded-md shadow-md">
                    <SelectGroup>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button class="border border-grayBorderLight w-[80px] h-[44px] rounded-lg text-textThird"
                variant="outline">Apply</Button>
            <span class="text-textThird">Selected 3 entries</span>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex gap-3 items-center justify-end">
                <span class="text-textThird">Show</span>
                <Select class="border-grayBorderLight ">
                    <SelectTrigger class="w-[180px] rounded-lg border-grayBorderLight w-[70px] h-[44px]">
                        <SelectValue class="text-textThird" placeholder="25" />
                    </SelectTrigger>
                    <SelectContent class="bg-white border border-gray-200 rounded-md shadow-md">
                        <SelectGroup>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div class="text-textThird">Show 1 to 100 of 433 entries</div>
        </div>
    </div>
</template>
