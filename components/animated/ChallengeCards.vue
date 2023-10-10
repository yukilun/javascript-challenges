<template>
    <ul id="challenge-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li v-for="challenge, idx in challenges" :key="challenge.id" ref="cards" 
            @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <button type="button" @click="()=>handleNavigate(challenge.id)" class="group">
                <AnimatedFlipThumbnail :link="challenge.thumbnail" :id="challenge.id"
                    class="opacity-80 group-hover:opacity-100 transition-300 shadow-lg" />
                <div class="flex gap-3 justify-center md:justify-start text-lg md:text-2xl my-3">
                    <p class="text-neutral-400 dark:text-neutral-500 md:w-12">
                        #{{ idx + 1 }}
                    </p>
                    <p class=" text-neutral-600 dark:text-neutral-300">
                        {{ challenge.name }}
                    </p>
                </div>
            </button>
        </li>
    </ul>
    <AnimatedFlipContainer v-if="isNavigating" 
        :id="navId" 
        :link="challenges.find((c)=>c.id==navId).thumbnail" />
</template>

<script setup>
import { challenges } from '~/assets/data.json';
import { useCursorStore } from '~/store/Cursor';
import { useFlipStore } from '~/store/Flip';

const isNavigating = ref(false);
const navId = ref(null);
const flipStore = useFlipStore();
function handleNavigate(id) {
    //1. Flip from FlipThumbnail to FlipContainer
    //2. Flip and Navigate from FilpContainer to the challenge page 
    navId.value = id;
    isNavigating.value = true;
}

const cursorStore = useCursorStore();
function handleMouseEnter(e) {
    cursorStore.setCursorState('card');
}
function handleMouseLeave(e) {
    cursorStore.setCursorState('normal');
}

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger, $Flip: Flip } = useNuxtApp();
const cards = ref([]);

onMounted(()=> {
    gsap.set(cards.value, {opacity: 0});
    ScrollTrigger.refresh(true);
    ScrollTrigger.batch(cards.value, {
        onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
        onLeave: batch => gsap.set(batch, {opacity: 0, y: -50, overwrite: true}),
        onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
        onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
    })
})

</script>