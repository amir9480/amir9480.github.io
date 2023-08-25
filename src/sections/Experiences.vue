<script setup lang="ts">
import Divider from '../components/Divider.vue';
import Experience from '../components/Experience.vue';
</script>

<template>
    <section id="experiences" class="bg-base-100 m-10">
        <Divider>My experiences</Divider>
        <ol class="mx-auto container lg:w-3/4">
            <Experience name="Narenji" date="Jun 2017 - Sep 2018" logo="/images/experiences/narenji.webp">
                I began my software development career at Narenji as a junior full-stack developer and
                worked on a startup project called AsaSara, developing a large-scale, multilingual website and mobile application API.
                This hands-on experience taught me valuable skills in web development and exposed me to a variety of technologies.
            </Experience>
            <Experience name="HiNext" date="Nov 2018 - Jun 2019" logo="/images/experiences/hinext.webp">
                At HiNext, I developed my skills as a backend developer by working on a range of web projects.
                As part of a CRM project team, I gained a lot of experience in automations.
                To optimize the functionality of the CRM's single-page application,
                I taught myself Vue.js and seamlessly integrated it with Laravel, building the necessary features.
            </Experience>
            <Experience name="Fanora" date="Jun 2019 - Jun 2021" logo="/images/experiences/fanora.webp">
                After joining the Fanora team, I gained valuable experience across a range of challenging projects,
                including E-Commerce websites. One of my notable achievements during this time was
                the development of a Laravel package that simplifies the creation of admin panels, improving speed and ease of use.
            </Experience>
        </ol>
    </section>
</template>
