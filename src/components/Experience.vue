<script setup lang="ts">
const props = defineProps({
    logo: { type: String, required: false },
    icon: { type: String, required: false },
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
                        <div class="w-16">
                            <img v-if="props.logo" :src="props.logo" :alt="props.name" class="object-contain w-full rounded-full" loading="lazy" />
                            <i v-else-if="props.icon" class="text-4xl align-middle" :class="props.icon" />
                        </div>
                        <a href="#!" class="font-medium text-xl duration-300 transition ease-in-out">
                            {{ props.name }}
                        </a>
                    </div>
                    <span class="font-medium duration-300 transition ease-in-out text-sm">
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
