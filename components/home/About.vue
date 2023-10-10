<template>
    <section id="about" class="text-center md:text-left mb-40 md:mb-52">
        <AnimatedHeading headingText="About" class="text-4xl md:text-5xl lg:text-6xl uppercase mb-8 md:mb-10"/>
        <div class="flex flex-col md:flex-row justify-between items-stretch gap-10 lg:gap-20">
            <div class="w-full md:w-1/2">
                <AnimatedParagraph :paragraphText="about" class="text-lg md:text-2xl !leading-[1.5em] text-neutral-500 dark:text-neutral-400 mb-10"/>
                <div id="contact" class="flex gap-3 justify-center md:justify-start">
                    <NuxtLink v-for="item in contact" :key="item.name" :to="item.link" :aria-label="item.name" 
                        class="text-neutral-400 dark:text-neutral-500 hover:!text-cyan-500 transition-300">
                        <Icon :name="item.icon" class="h-8 w-8 md:h-10 md:w-10"/>
                    </NuxtLink>
                </div>
            </div>
            <div ref="imgContainer" class="w-full md:w-1/2 aspect-3/2 md:min-h-full md:aspect-auto order-first md:order-last"></div>
        </div>
    </section>
</template>

<script setup>
import { about, contact } from '~/assets/data.json';
const { $hoverEffect: hoverEffect } = useNuxtApp();
const imgContainer = ref(null);
onMounted(()=> {
    new hoverEffect({
        parent: imgContainer.value,
        intensity: 0.3,
        image1: '/img/about-1.png',
        image2: '/img/about-2.png',
        displacementImage: '/img/about-displacement-3.jpg',
        imagesRatio: 2 / 3
    });
})
</script>