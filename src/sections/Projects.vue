<script setup lang="ts">
import Divider from '../components/Divider.vue';
import Project from '../components/Project.vue';
</script>

<template>
    <section id="projects" class="bg-base-100 m-10">
        <Divider>Projects</Divider>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Project
                name="JPH"
                link="https://jph.ir/"
                screenshot="/images/projects/jph-screenshot.jpg"
                :stacks="['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js', 'Livewire']"
            >
                Contributed on developing new e-commerce website for Jame-e-Negar Publishing House (JPH),
                including migration of all data, users, and features from outdated and inefficient website with limited scalability.
            </Project>
            <Project
                name="Caspian 24"
                link="https://www.caspian24.ir/"
                screenshot="/images/projects/caspian24-screenshot.jpg"
                :stacks="['PHP', 'Laravel', 'MySQL']"
            >
                Contributed to the development of a news agency's Backend system, building the system from scratch to meet project requirements.
            </Project>
            <Project
                name="AsaSara"
                :stacks="['PHP', 'Laravel', 'MySQL']"
            >
                AsaSara was a startup which focused on buying and renting houses for tourism purposes,
                and I contributed to develop mostly on the application API and back-office system for admins and sellers,
                streamlining the process of updating website information and ensuring a seamless user experience.
            </Project>
            <Project
                name="Laravel Extra Intellisense"
                link="https://marketplace.visualstudio.com/items?itemName=amiralizadeh9480.laravel-extra-intellisense"
                :stacks="['TypeScript', 'PHP', 'Laravel']"
            >
                An extension I made for vscode editor to provide more code autocomplete for Laravel features with over a million installs.
            </Project>
        </div>

    </section>
</template>
