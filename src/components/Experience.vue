<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    logo: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: String, required: true },
})
</script>

<template>
    <li class="border-l-2 border-primary">
        <div class="md:flex flex-start">
            <div class="bg-primary w-6 h-6 flex items-center justify-center rounded-full -ml-3">
            </div>
            <div class="group block w-full p-6 border rounded-lg shadow-lg ml-6 mb-10">
                <div class="md:flex justify-between items-center mb-4">
                    <div class="md:flex justify-between align-middle items-center gap-2 transition md:group-hover:scale-110">
                        <div class="w-24">
                            <img :src="props.logo" class="object-contain rounded-full" />
                        </div>
                        <a href="#!" class="font-medium text-primary text-xl hover:text-primary-700 focus:text-primary-800 duration-300 transition ease-in-out">
                            {{ props.name }}
                        </a>
                    </div>
                    <span class="font-medium text-primary hover:text-primary-700 focus:text-primary-800 duration-300 transition ease-in-out text-sm">
                        {{ props.date }}
                    </span>
                </div>
                <p class="text-gray-700 mb-6 text-justify">
                    <slot></slot>
                </p>
            </div>
        </div>
    </li>
</template>
