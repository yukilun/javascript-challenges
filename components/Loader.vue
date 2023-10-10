<template>
    <div ref="loader" class="fixed top-0 left-0 z-40 w-full h-dynamic-screen bg-neutral-50 dark:bg-neutral-800 flex flex-col justify-center items-center opacity-100">
        <div ref="content" class="w-[80%] max-w-[350px] opacity-0">
            <h1 class="text-5xl md:text-6xl lg:text-7xl text-center mb-5">
                <span ref="percentage">100</span>%
            </h1>
            <div class="w-full relative">
                <Logo class="w-full"/>
                <div ref="scan" class="absolute top-full -left-[2.5%] w-[105%] h-1 bg-cyan-400 rounded-full shadow-scan opacity-0">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $gsap: gsap, $lenis: lenis, hook } = useNuxtApp();
const percentage = ref(null);
const scan = ref(null);
const content = ref(null);
const loader = ref(null);
onMounted(() => {
    lenis.stop();
    const tl = gsap.timeline();
    tl.add('start');
    // 1 - percentage from 0 to 100
    tl.from(percentage.value, {
        textContent: 0,
        snap: {textContent: 1},
        duration: 2.5
    }, 'start');
    // 1 - scan from top to bottom
    tl.from(scan.value, {
        top: 0,
        duration: 2.2
    },'start');
    // 2 - fade out scan
    tl.from(scan.value, {
        opacity: 1,
        duration: 0.3,
        ease: "Power2.easeOut"
    })
    // 3 - fade out content
    tl.from(content.value, {
        opacity: 1,
        duration: 0.5,
        ease: "Power2.easeOut"
    })
    // 4 - fade out loader
    tl.to(loader.value, {
        opacity: 0,
        duration: 0.5,
        ease: "Power2.easeOut"
    })
    // 5 - Remove loader
    tl.to(loader.value, {
        display: 'none',
        duration: 0.01
    })
    // 6 - Enable scrolling
    .then(()=> {
        lenis.start();
    })
})
</script>