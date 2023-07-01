<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    image: { type: String, required: true },
})
</script>

<template>
    <div class="group border-solid border-2 rounded-md duration-300 p-4 relative overflow-hidden grayscale hover:filter-none hover:cursor-pointer">
        <div class="flex flex-col justify-between items-center h-full">
            <div class="grow flex items-center z-10">
                <img :src="props.image" class="p-4 transition transition-all group-hover:scale-110" />
            </div>
            <span class="flex-none text-2xl z-10">
                <slot></slot>
            </span>
        </div>
        <div class="absolute flex flex-col justify-between items-center h-full scale-150 inset-0">
            <div class="grow flex items-center">
                <img :src="props.image" class="p-4 blur-md transition transition-opacity duration-300 opacity-0 group-hover:opacity-40" />
            </div>
        </div>
    </div>
</template>
