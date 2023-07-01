<script setup lang="ts">
import Divider from '../components/Divider.vue';
import Skill from '../components/Skill.vue';
</script>

<template>
    <section id="skills" class="bg-base-100 m-10">
        <Divider>My general skills</Divider>
        <div class="container mx-auto flex gap-4 items-center justify-center">
            <div>
                <div class="badge badge-primary hover:badge-secondary hover:scale-110 hover:cursor-pointer text-2xl p-5 whitespace-nowrap m-2">Teamwork</div>
                <div class="badge badge-primary hover:badge-secondary hover:scale-110 hover:cursor-pointer text-2xl p-5 whitespace-nowrap m-2">Problem solving</div>
                <div class="badge badge-primary hover:badge-secondary hover:scale-110 hover:cursor-pointer text-2xl p-5 whitespace-nowrap m-2">Creativity</div>
                <div class="badge badge-primary hover:badge-secondary hover:scale-110 hover:cursor-pointer text-2xl p-5 whitespace-nowrap m-2">Self-education</div>
            </div>
        </div>

        <Divider>My key technical skills</Divider>
        <div class="container mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:px-36 gap-5">
                <Skill image="/images/skills/php.svg">PHP</Skill>
                <Skill image="/images/skills/js.svg">JavaScript</Skill>
                <Skill image="/images/skills/ts.svg">TypeScript</Skill>
                <Skill image="/images/skills/laravel.svg">Laravel</Skill>
                <Skill image="/images/skills/vue.svg">Vue.js</Skill>
                <Skill image="/images/skills/mysql.svg">MySQL</Skill>
                <Skill image="/images/skills/python.svg">Python</Skill>
                <Skill image="/images/skills/cpp.svg">C++</Skill>
                <Skill image="/images/skills/cs.svg">C#</Skill>
                <Skill image="/images/skills/git.svg">Git</Skill>
                <Skill image="/images/skills/docker.svg">Docker</Skill>
                <Skill image="/images/skills/linux.svg">Linux</Skill>
            </div>
        </div>
    </section>
</template>
