<template>
    <section id="challenge-screenshots" class="flex flex-col gap-8 md:gap-10 items-center mt-10 mb-16 md:mb-20 pb-5 overflow-hidden">
        <img v-for="img, idx in challenge.screenshots" :key="idx"
            :src="img" :alt="`screenshot ${idx} for ${challenge.name}`"
            class="w-full max-w-[900px] object-contain shadow-lg"/>
    </section>
</template>

<script setup>
const { challenge } = defineProps(['challenge']);
const images = ref([]);
</script>