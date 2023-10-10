<template>
    <svg ref="cicularText" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0" id="path-circle" fill="none" />
        <text>
            <textPath href="#path-circle" class="font-heading tracking-widest fill-neutral-500">
                Accept a Challenge ✦ Learn ✦ Design ✦ Code ✦ Have Fun ✦
            </textPath>
        </text>
    </svg>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();
const cicularText = ref(null);
onMounted(()=> {
    gsap.fromTo(cicularText.value, {
        xPercent: 0,
        rotation: 0,
    },{
        xPercent: 0,
        rotation: -360,
        duration: 9,
        ease: "linear",
        repeat: -1
    })
})
</script>