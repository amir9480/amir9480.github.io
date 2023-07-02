<script setup lang="ts">
const props = defineProps({
    name: { type: String, required: true },
    screenshot: { type: String, default: null },
    link: { type: String, default: null },
    stacks: { type: Array, default: () => [] },
})
</script>

<template>
    <div class="card bg-base-100 shadow-xl">
        <figure v-if="props.screenshot != null" class="w-full cursor-n-resize m-auto">
            <div class="mockup-window border bg-base-300 w-5/6">
                <img
                    class="w-full h-96 object-cover object-top hover:object-bottom transition-all duration-[5s]"
                    :src="props.screenshot"
                    :alt="props.name"
                    loading="lazy"
                />
            </div>
        </figure>
        <div class="card-body">
            <div>
                <a v-if="props.link != null" :href="link" target="_blank" class="card-title">
                    {{ props.name }}
                    <i class="icon-external-link" />
                </a>
                <span v-else class="card-title">{{ props.name }}</span>
            </div>
            <div>
                <slot></slot>
            </div>
            <div v-if="props.stacks.length > 0" class="card-actions justify-end">
                <div v-for="(stack, stackIndex) in stacks" :key="stackIndex" class="badge hover:badge-primary hover:text-base-100 hover:cursor-pointer">{{ stack }}</div>
            </div>
        </div>
    </div>
</template>
