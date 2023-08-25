<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String, required: true },
})
</script>

<template>
    <a :href="props.link" class="tooltip hover:text-primary" :title="props.title" :data-tip="props.title" target="_blank">
        <i class="text-4xl cursor-pointer" :class="props.icon"></i>
    </a>
</template>
