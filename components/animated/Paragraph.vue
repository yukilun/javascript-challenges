<template>
    <p ref="paragraph">
        <span v-for="word, idx in paragraphText.split('')" :key="idx" ref="words">
            {{ word }}
        </span>
    </p>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();
const { paragraphText } = defineProps(['paragraphText']);
const paragraph = ref(null);
const words = ref([]);
onMounted(() => {
        gsap.fromTo(words.value, {
            'will-change': 'opacity',
            opacity: 0.1
        }, 
        {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: paragraph.value,
                start: 'top bottom-=45%',
                end: 'center top+=45%',
                scrub: true,
            }
        });
})
</script>