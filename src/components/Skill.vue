<script setup lang="ts">
const props = defineProps({
    image: { type: String, required: true },
    name: { type: String, required: true },
})
</script>

<template>
    <div class="group border-solid border-2 rounded-md duration-300 p-4 relative overflow-hidden grayscale hover:filter-none hover:cursor-pointer">
        <div class="flex flex-col justify-between items-center h-full">
            <div class="grow flex items-center z-10">
                <img v-lazy="props.image" :alt="props.name" class="p-4 w-full transition transition-all group-hover:scale-110" loading="lazy" />
            </div>
            <span class="flex-none text-2xl z-10">
                {{ props.name }}
            </span>
        </div>
        <div class="absolute flex flex-col justify-between items-center h-full scale-150 inset-0">
            <div class="grow flex items-center">
                <img v-lazy="props.image" :alt="props.name" class="p-4 blur-md w-full transition transition-opacity duration-300 opacity-0 group-hover:opacity-40" loading="lazy" />
            </div>
        </div>
    </div>
</template>
