<template>
  <Card>
    <CardContent class="flex gap-[22px] flex-col h-full">
      <img :src="item.img" alt="img" class="w-[200px] h-[258px]" />
      <div class="flex gap-[12px] px-2 w-[184px]" :class="isFavorite ? 'flex-row' : 'flex-col h-full justify-between'">
        <div>
          <span class="px-[10px] py-[6px] rounded-[4px] text-xs" :class="getStatusClass(item.status)">{{
            getStatusText(item.status) }}
          </span>
        </div>
        <div class="font-bold text-sm">{{ item.explanation }}</div>
        <div class="flex flex-col gap-[12px]">
          <div class="flex  gap-[8px]" :class="isFavorite ? 'flex-col' : 'flex-row'">
            <div class=" flex item-center gap-[6px] text-textThird  text-sm font-medium">
              <span class="flex items-center"><img src="@/assets/icons/user.svg" /></span>{{ item.user
              }}
            </div>
            <div class="text-textThird text-sm font-medium"> {{
              `${item.readPage}pages` }}</div>
          </div>
          <div :class="isFavorite ? 'flex-row' : 'flex justify-end'">
            <Button variant="outline" class="bg-secondary text-white p-[10px] w-full">
              Update Info
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { BookItemModel, EnumBookStatus } from '@/types';

import Button from './ui/button/Button.vue';

const props = defineProps<{
  item: BookItemModel;
  isFavorite: {
    type: Boolean,
    default: false
  }
}>();

const getStatusClass = (status: EnumBookStatus) => {
  if (status === EnumBookStatus.Completed) return 'bg-completed';
  if (status === EnumBookStatus.InProgress) return 'bg-reading text-white';
  if (status === EnumBookStatus.NotStarted) return 'bg-toRead text-white';
  return '';
};

const getStatusText = (status: EnumBookStatus) => {
  if (status === EnumBookStatus.Completed) return 'Completed';
  if (status === EnumBookStatus.InProgress) return 'Reading';
  if (status === EnumBookStatus.NotStarted) return 'To Read';
  return '';
};


</script>
