<script setup lang="ts">
import Header from './sections/Header.vue';
import Hero from './sections/Hero.vue';
import Skills from './sections/Skills.vue';
import Experiences from './sections/Experiences.vue';
import Projects from './sections/Projects.vue';
import Footer from './sections/Footer.vue';
import Navigation from './components/Naviagtion.vue';
</script>

<template>
    <div class="drawer max-h-full">
        <input id="website-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <Header></Header>

            <main>
                <Hero></Hero>
                <Skills></Skills>
                <Experiences></Experiences>
                <Projects></Projects>
            </main>

            <Footer></Footer>
        </div>
        <div class="drawer-side z-50">
            <label for="website-drawer" class="drawer-overlay"></label>
            <Navigation class="menu p-4 w-80 h-full bg-primary"></Navigation>
        </div>
    </div>
</template>

