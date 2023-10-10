<template>
    <h1 ref="heading">
        <span v-for="char,idx in headingText.split('')" :key="idx" ref="chars" class="inline-block">
            {{ char }}
        </span>
    </h1>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();
const { headingText } = defineProps(['headingText']);
const heading = ref(null);
const chars = ref([]);
onMounted(()=> {
    gsap.fromTo(chars.value, {
        'will-change': 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
    },
    {
        duration: 1,
        ease: 'back.inOut(2)',
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: 0.03,
        scrollTrigger: {
            trigger: heading.value,
            start: 'center bottom+=50%',
            end: 'bottom top+=40%',
            scrub: true
        }
    });
})
</script>