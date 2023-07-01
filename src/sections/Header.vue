<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navigation from '../components/Naviagtion.vue';

const hidden = ref(true);

onMounted(() => {
    window.addEventListener('scroll', function () {
        hidden.value = (window.scrollY == 0);
    });
});

</script>

<template>
    <header ref="navbar" class="w-full navbar fixed top-0 bg-primary z-40 transition-all duration-300 overflow-hidden" :class="{'-my-20': hidden}">
        <div class="flex-none lg:hidden">
            <label for="website-drawer" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </label>
        </div>
        <div class="flex-auto hidden lg:block">
            <div class="flex flex-col items-center">
                <Navigation class="menu menu-horizontal"></Navigation>
            </div>
        </div>
    </header>
</template>
