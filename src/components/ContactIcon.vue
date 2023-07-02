<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String, required: true },
})
</script>

<template>
    <a :href="props.link" class="tooltip" :title="props.title" :data-tip="props.title" target="_blank">
        <i class="text-4xl cursor-pointer hover:text-primary" :class="props.icon"></i>
    </a>
</template>
