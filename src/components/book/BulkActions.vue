<script setup lang="ts">
import {ref, watch} from "vue"

import Select from '../ui/select/Select.vue';
import SelectContent from '../ui/select/SelectContent.vue';
import SelectTrigger from '../ui/select/SelectTrigger.vue';
import SelectGroup from '../ui/select/SelectGroup.vue';
import SelectValue from '../ui/select/SelectValue.vue';
import SelectItem from '../ui/select/SelectItem.vue';
import {useBooks} from "@/composables/useBooks";
import {Button} from "@/components/ui/button";

const { totalBooks } = useBooks()

const emit = defineEmits<{
  "update:showCount": [number]
}>()

const showCount = ref(10)
const showOptions = [10, 25, 50, 100]

watch(showCount, val => {
  emit("update:showCount", val)
})
</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
    <div class="flex gap-3 items-center">
      <Select class="border-grayBorderLight">
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
      <div class="flex gap-3 items-center md:justify-end">
        <span class="text-textThird">Show</span>

        <Select class="border-grayBorderLight"  v-model="showCount">
          <SelectTrigger class="w-[180px] rounded-lg border-grayBorderLight w-[70px] h-[44px]">
            <SelectValue class="text-textThird" :placeholder="showCount.toString()" />
          </SelectTrigger>

          <SelectContent class="bg-white border border-gray-200 rounded-md shadow-md">
            <SelectGroup>
              <SelectItem
                  v-for="n in showOptions"
                  :key="n"
                  :value="n"
              >
                {{ n }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="text-textThird">Show 1 to {{ showCount }} of {{ totalBooks }} entries</div>
    </div>
  </div>
</template>
