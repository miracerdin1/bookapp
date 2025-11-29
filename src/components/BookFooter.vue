<template>
    <div class="border-t border-grayBorderLight py-[40px] px-[114px] mt-[120px]">
        <div class="flex justify-between items-start">

            <div class="flex items-center gap-3 cursor-pointer">
                <img :src="Logo" alt="Bookapp Logo" class="w-size-md h-size-lg" />
                <span class="font-nunito font-bold text-[20px] text-textPrimary title">Bookshop</span>
            </div>


            <div class="flex gap-4 flex-col">
                <div class="font-bold text-lg">Learn More</div>
                <div class="flex flex-col ">
                    <div v-for="value in learnMore" class="text-textForth text-sm leading-[30px] font-normal">
                        {{ value }}
                    </div>

                </div>
            </div>

            <div class="flex flex-col gap-[16px]">
                <div class="font-bold text-lg">Menu</div>
                <div class="flex flex-col ">
                    <div v-for="value in menu" class="text-textForth text-sm leading-[30px] font-normal">
                        {{ value }}
                    </div>

                </div>
            </div>

            <div class="flex flex-col gap-[16px]">
                <div class="font-bold text-lg">Social</div>
                <div class="flex gap-[48px]">

                    <img src="@/assets/icons/facebook.svg" />
                    <img src="@/assets/icons/instagram.svg" />
                    <img src="@/assets/icons/youtube.svg" />



                </div>
            </div>



        </div>
        <div class="border-t border-grayBorderLight flex justify-between h-[54px] flex items-end">
            <div>
                <a href="#">
                    Commercial Terms & Conditions
                </a>
                <a href="#" class="font-roboto text-gray-medium text-sm font-small">
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

const learnMore = [
    'About Bookshop',

    'Press Releases',

    'Environment',

    'Jobs',

    'Privacy Policy',

    'Contact Us',
]
const menu = [
    'Ebooks',

    'Gift Cards',

    'Special Offers',

    'New Books',

    'Best Seller',

]
const social = [
    '@/assets/icons/facebook.svg',

    '@/assets/icons/instagram.svg',

    '@/assets/icons/youtube.svg',
]
</script>