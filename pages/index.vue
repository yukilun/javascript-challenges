<template>
    <div>
        <div class="h-screen flex flex-col">
            <Header />
            <HomeHero />
        </div>
        <HomeAbout />
        <HomeChallenges />
        <HomePlayground />
    </div>
</template>

<script setup>
useHead({
    title: "JS Challenges",
    meta: [
        { name: "description", content: "Discover my JavaScript journey! Dive into my collection of challenging JavaScript projects, showcasing my progress and achievements. " },
    ]
});

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();
onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
})
</script>