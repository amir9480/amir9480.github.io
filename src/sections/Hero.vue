<template>
    <section id="about" class="hero bg-base-200">
        <div class="flex flex-col-reverse lg:flex-row items-center min-h-screen">
            <div class="flex lg:self-end self-center basis-1/3">
                <img v-lazy="'/images/me.webp'" alt="Amir Alizadeh" class="w-full h-3/4 lg:h-full p-24 pb-0 object-contain transition grayscale hover:filter-none opacity-90 hover:opacity-100" />
            </div>
            <div class="p-10 mt-12 basis-2/3">
                <p class="text-8xl text-primary">Hi!</p>
                <h1 class="text-4xl text-base-100">I'm Amir Alizadeh</h1>
                <h2 class="text-2xl text-primary">Backend Software Engineer</h2>
                <p class="py-6 text-base-100 text-justify">
                    Backend Software Engineer with 8+ years of experience designing and deploying scalable, high-performance backend systems.
                    I specialize in distributed systems, microservices, cloud infrastructure on AWS, and AI-driven automation.
                    I build reliable platforms, produce clear technical documentation, and optimize complex workflows to deliver measurable business value.
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
