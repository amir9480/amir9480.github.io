<template>
    <section id="about" class="hero bg-base-200">
        <div class="flex flex-col-reverse lg:flex-row items-center min-h-screen">
            <div class="flex self-end">
                <img v-lazy="'/images/me.webp'" alt="Amir Alizadeh" class="w-full p-24 pb-0 object-contain transition grayscale hover:filter-none opacity-90 hover:opacity-100" />
            </div>
            <div class="p-10 mt-12 basis-3/4">
                <p class="text-8xl text-primary">Hi!</p>
                <h1 class="text-4xl text-base-100">I'm Amir Alizadeh</h1>
                <h2 class="text-2xl text-primary">A fullstack web developer</h2>
                <p class="py-6 text-base-100 text-justify">
                    As a backend developer with expertise in Laravel and PHP, I specialize in building robust web applications
                    that deliver exceptional user experiences. With a solid foundation in front-end development using JavaScript
                    and Vue.js, I bring a full-stack perspective to every project.
                    My passion for exploring new technologies and expanding my skill set drives me to continuously
                    improve and grow as a developer. Whether working independently or collaborating with a team,
                    I am committed to delivering high-quality code that exceeds expectations.
                </p>
                <a href="#skills" class="btn btn-primary transition hover:scale-110">My Skills</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
#about {
    background-image: url(/images/background.webp);
}
</style>
