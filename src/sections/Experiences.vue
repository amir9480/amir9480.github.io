<script setup lang="ts">
import Divider from '../components/Divider.vue';
import Experience from '../components/Experience.vue';
</script>

<template>
    <section id="experiences" class="bg-base-100 m-10">
        <Divider>My experiences</Divider>
        <ol class="mx-auto container lg:w-3/4">
            <Experience name="Tribes Digital" date="Oct 2023 - Present">
                Developed and launched core features for a hiring platform that uses DevCheck® to improve candidate matching and evaluation.
                I optimized the database layer to support real-time recomputation of search-specific scores for 30,000+ users, designed scalable microservices for high-traffic long-running tasks, and built a Go-based document generation service that reduced creation time from 15-20 seconds to 2-3 seconds.
                I also created a secure multi-language code execution engine using Go and nsjail, developed AI-powered interview and candidate-analysis features, automated admin workflows with AI agents, and built a browser automation API with comprehensive OpenAPI documentation.
                On the operations side, I set up GitHub Actions CI/CD, containerized services with Docker, published images to GHCR, and managed production deployment and incident response workflows.
            </Experience>
            <Experience name="Confidential (NDA)" date="Sep 2021 - Aug 2023">
                Built a real-time news search engine that scraped and indexed content from new sources, improving coverage breadth and system reliability through scalable ingestion, normalization, and resilient error handling.
            </Experience>
            <Experience name="Fanora" date="Jun 2019 - Jun 2021" logo="/images/experiences/fanora.webp">
                Worked as a Full-Stack Web Developer on the e-commerce platform for Jame-e-Negar Publishing House (JPH), a leading medical book publisher in Iran.
                I led the migration of data, users, and features from the legacy system to a faster, more scalable platform that now handles 300,000+ visitors and 3,000+ orders monthly.
            </Experience>
            <Experience name="HiNext" date="Nov 2018 - Jun 2019" logo="/images/experiences/hinext.webp">
                Built a content management system for online news agencies, co-developed a self-hosted distributed CRM for local businesses, and implemented CI/CD pipelines with GitLab to automate testing, deployment, and monitoring for operational visibility.
            </Experience>
            <Experience name="Narenji" date="Jun 2017 - Sep 2018" logo="/images/experiences/narenji.webp">
                Started my software engineering career by building back-office features for AsaSara, a real-estate and tourism startup, and creating a RESTful API to power an Android application while documenting endpoints with Swagger.
            </Experience>
        </ol>
    </section>
</template>
