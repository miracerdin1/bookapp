<template>
    <div class="border-t border-t-grayBorderLight py-[40px] px-[114px] dark:bg-black dark:text-textSecondary">
        <div class="flex flex-col items-start md:gap-10 md:flex-row md:justify-between md:items-start">

            <div class="flex items-center gap-3 cursor-pointer">
                <img :src="Logo" alt="Bookapp Logo" class="w-size-md h-size-lg" />
                <span
                    class="font-nunito font-bold text-[20px] text-textPrimary title dark:text-textSecondary">Bookshop</span>
            </div>


            <div class="flex gap-4 flex-col">
                <div class="font-bold text-lg">Learn More</div>
                <div class="flex flex-col ">
                    <div v-for="value in footerLinks.learnMore"
                        class="text-textForth text-sm leading-[30px] font-normal dark:text-textSecondary">
                        {{ value }}
                    </div>

                </div>
            </div>

            <div class="flex flex-col gap-4">
                <div class="font-bold text-lg">Menu</div>
                <div class="flex flex-col ">
                    <div v-for="value in footerLinks.menu"
                        class="text-textForth text-sm leading-[30px] font-normal dark:text-textSecondary">
                        {{ value }}
                    </div>

                </div>
            </div>

            <div class="flex flex-col gap-4">
                <div class="font-bold text-lg">Social</div>
                <div class="flex gap-[48px]">
                    <img src="@/assets/icons/facebook.svg" />
                    <img src="@/assets/icons/instagram.svg" />
                    <img src="@/assets/icons/youtube.svg" />
                </div>
            </div>



        </div>
        <div
            class="font-roboto border-t border-grayBorderLight text-grayMedium text-sm leading-[150%] flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-end h-[54px]">
            <div>
                <a href="#">
                    Commercial Terms & Conditions
                </a>
                <a href="#">
                    Privacy Policy
                </a>
            </div>
            <div>535 Mission St Fl 14 San Francisco, CA 94105</div>
            <div>Copyright © 2022 entrapeer, All rights reserved.</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Logo from '@/assets/icons/Logo.svg';
import { footerLinks } from '@/constants';
</script>