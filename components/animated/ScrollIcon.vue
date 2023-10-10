<template>
    <div class="w-6 h-10 mx-auto border-[3px] border-neutral-400 dark:border-neutral-600 rounded-full" aria-label="scroll down to explore">
        <div ref="wheel" class="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full mx-auto mt-1"></div>
    </div>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();
const wheel = ref(null);
onMounted(()=> {
    gsap.to(wheel.value, {
        y: 15,
        opacity: 0,
        duration: 2,
        ease: "Power2.easeOut",
        repeat: -1
    })
})
</script>