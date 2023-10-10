<template>
    <nav class="text-center mt-16 md:mt-20 mb-10">
        <button type="button" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleNavigate"  :to="`/challenge/${nextChallenge.id}`" 
            class="w-[80%] md:w-full mx-auto relative flex flex-col md:flex-row items-center gap-5 md:gap-20 group">
            <AnimatedFlipThumbnail :link="nextChallenge.thumbnail" :id="nextChallenge.id" class="shadow-lg w-full md:w-1/2 max-w-[500px] opacity-70 group-hover:opacity-100 transition-300"/>
            <span class="flex-grow md:w-1/2 order-first md:order-last flex justify-center items-center">
                <span class="w-full max-w-[400px] flex flex-row flex-wrap md:flex-col md:gap-10 justify-center font-heading text-center text-xl sm:text-3xl md:text-4xl">
                    <span class="uppercase md:text-left">Next -&nbsp;</span>
                    <span>{{ nextChallenge.name }}</span>
                </span>
            </span>
        </button>
    </nav>
    <AnimatedFlipContainer v-if="isNavigating" :link="nextChallenge.thumbnail" :id="nextChallenge.id" />
</template>

<script setup>
import { useFlipStore } from '~/store/Flip';
import { useCursorStore } from '~/store/Cursor';

const { nextChallenge } = defineProps(['nextChallenge']);
const isNavigating = ref(false);

const flipStore = useFlipStore();
const cursorStore = useCursorStore();

function handleNavigate() {
    isNavigating.value = true;
}

function handleMouseEnter() {
    cursorStore.setCursorState('card');
}

function handleMouseLeave() {
    cursorStore.setCursorState('normal');
}
</script>