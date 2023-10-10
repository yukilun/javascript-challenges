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
const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();
onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
})
</script>