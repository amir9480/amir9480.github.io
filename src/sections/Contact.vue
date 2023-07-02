<script setup lang="ts">
import Divider from '../components/Divider.vue';
import ContactIcon from '../components/ContactIcon.vue';
</script>

<template>
    <section id="skills" class="bg-base-100 m-10">
        <Divider>Connect me</Divider>
        <div class="container mx-auto">
            <div class="grid grid-cols-3 sm:grid-cols-7 lg:px-36 gap-5">
                <ContactIcon icon="icon-gmail" title="My Email" link="mailto:amiralizadeh9480@gmail.com" />
                <ContactIcon icon="icon-linkedin" title="My Linkedin" link="https://www.linkedin.com/in/amir9480/" />
                <ContactIcon icon="icon-github" title="My Github" link="https://github.com/amir9480" />
                <ContactIcon icon="icon-telegram" title="My Telegram" link="https://t.me/amir9480" />
                <ContactIcon icon="icon-twitter" title="My Twitter" link="https://twitter.com/amir_9480" />
                <ContactIcon icon="icon-medium" title="My Medium" link="https://amiralizadeh9480.medium.com/" />
                <ContactIcon icon="icon-virgool" title="My Virgool" link="https://virgool.io/@amiralizadeh9480" />
            </div>
        </div>
    </section>
</template>
