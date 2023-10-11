<template>
    <section id="challenge-info" class="flex flex-col md:flex-row gap-10 mt-16 mb-20 items-center">
        <div class="w-full md:w-1/2 flex-shrink-0">
            <AnimatedFlipImage :link="challenge.thumbnail" :id="challenge.id" />
        </div>
        <div class="flex flex-col justify-center gap-4 lg:gap-5">
            <p class="font-heading text-3xl lg:text-4xl">{{ challenge.name }}</p>
            <ul class="flex gap-2 flex-wrap justify-center md:justify-start text-sm lg:text-base">
                <li v-for="technology in challenge.technologies"
                    class="px-2 rounded-full bg-neutral-400 text-neutral-50 dark:bg-neutral-400 dark:text-neutral-800">
                    {{ technology }}
                </li>
            </ul>
            <p class="text-sm lg:text-base text-neutral-500 dark:text-neutral-400">
                Provided by
                <NuxtLink :to="challenge.provider.link" target="_blank"
                    class="text-cyan-500 hover:opacity-50 transition-300">
                    {{ challenge.provider.name }}
                </NuxtLink>
            </p>
            <p class="text-base lg:text-lg text-neutral-500 dark:text-neutral-400">
                {{ challenge.description }}
            </p>
            <ul class="flex gap-x-4 gap-y-1 flex-wrap justify-center md:justify-start text-base lg:text-lg">
                <li v-if="challenge.links.repo">
                    <NuxtLink :to="challenge.links.repo" target="_blank"
                        class="text-cyan-500 hover:opacity-50 transition-300 flex items-center gap-1">
                        <Icon name="mdi:github" class="w-7 h-7" /> GitHub Repo
                    </NuxtLink>
                </li>
                <li v-if="challenge.links.demo">
                    <NuxtLink :to="challenge.links.demo" target="_blank"
                        class="text-cyan-500 hover:opacity-50 transition-300 flex items-center gap-1">
                        <Icon name="material-symbols:laptop-mac-outline" class="w-7 h-7" /> Live Demo
                    </NuxtLink>
                </li>
                <li v-if="challenge.links.codepen">
                    <NuxtLink :to="challenge.links.codepen" target="_blank"
                        class="text-cyan-500 hover:opacity-50 transition-300 flex items-center gap-1">
                        <Icon name="fe:codepen" class="w-7 h-7" /> CodePen
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const { challenge } = defineProps(['challenge']);
</script>