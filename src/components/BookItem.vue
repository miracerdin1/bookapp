<template>
  <Card>
    <CardContent class="flex gap-[22px] flex-col h-full w-[200px]">
      <div class="relative">
        <img :src="item.img" alt="img" class="w-full h-[258px] object-cover" />
        <span
          class="absolute top-2 right-2 cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <img :src="item.isFavorite ? redHeart : blackHeart" alt="favorite" class="w-6 h-6" />
        </span>
      </div>

      <div class="flex gap-[12px] px-2 flex-1" :class="isFavorite ? 'flex-row' : 'flex-col h-full justify-between'">
        <div class="flex justify-between">
          <span class="px-[10px] py-[6px] rounded-[4px] text-xs" :class="getStatusClass(item.status)">{{
            getStatusText(item.status) }}
          </span>
          <span class="font-bold text-lg leading-[100%]">{{ item.progress }}</span>
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
            <Button variant="outline" class="bg-secondary hover:bg-buttonHover text-white p-[10px] w-full">
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
import redHeart from '@/assets/icons/red-heart.svg';
import blackHeart from '@/assets/icons/black-heart.svg';

const props = defineProps<{
  item: BookItemModel;
  isFavorite?: {
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
