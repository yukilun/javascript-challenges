<template>
    <div ref="cursorContainer" class="fixed show-only-hover opacity-0 pointer-events-none z-50 mix-blend-difference">
        <div v-if="cursorStore.cursorState !== 'playground'" 
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  
             rounded-full h-8 w-8 border-2 border-neutral-400 transition-500 mix-blend-difference"
            :class="cursorStore.cursorState == 'card' && '!h-16 !w-16 bg-white !border-0'">
        </div>
    </div>
    <div ref="cursorFollower" 
        class="fixed show-only-hover opacity-0 pointer-events-none z-50 
        h-2 w-2 rounded-full bg-neutral-400 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        :class="cursorStore.cursorState == 'normal' ? 'block' : 'hidden'">
    </div>
</template>

<script setup>
import { useCursorStore } from '~/store/Cursor';
const cursorStore = useCursorStore();
const { $gsap: gsap } = useNuxtApp();
const route = useRoute();

const cursorContainer = ref(null);
const cursorFollower = ref(null);

function handleMoveMove(e) {
    gsap.set(cursorContainer.value, {opacity: 1});
        gsap.set(cursorFollower.value, {opacity: 1});
        gsap.to(cursorContainer.value, {
            top: e.clientY,
            left: e.clientX,
            duration: 0.2,
        });
        gsap.to(cursorFollower.value, {
            top: e.clientY,
            left: e.clientX,
            duration: 0.4,
        });
}

onMounted(() => {
    window.addEventListener('mousemove', handleMoveMove);
})

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMoveMove);
})

watch(() => route.path, () => {
    cursorStore.setCursorState('normal');
})
</script>