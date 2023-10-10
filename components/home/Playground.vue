<template>
    <section id="playground" class="mb-10">
        <AnimatedHeading headingText="playground" class="text-4xl md:text-5xl lg:text-6xl uppercase mb-8 md:mb-10" />
        <div @click="handleClick" @mousemove="handleMouseMove" @mouseout="handleMouseOut"
            class="w-full h-[70vh] min-h-[500px] bg-neutral-100 dark:bg-neutral-700 flex flex-col justify-center relative overflow-hidden cursor-none">
            <AnimatedTextMarquee displayText="Stamp here ✦&nbsp;" repeat="15"
                class="text-5xl md:text-8xl uppercase text-neutral-200 dark:text-neutral-600 opacity-50 pointer-events-none" />
            <Stamp v-for="stamp in stampsStore.stamps" :key="stamp.id" :stamp="stamp" />
            <Stamp :stamp="stampsStore.currentStamp" class="show-only-hover" :class="cursorStore.cursorState == 'playground' ? 'opacity-50' : 'opacity-0'" isCurrentStamp />
        </div>
    </section>
</template>

<script setup>
import { useStampsStore } from '~/store/Stamps';
import { useCursorStore } from '~/store/Cursor';
const stampsStore = useStampsStore();
const cursorStore = useCursorStore();

function handleClick(e) {
    stampsStore.addStamp(e.offsetX, e.offsetY);
}

function handleMouseMove(e) {
    stampsStore.updateStamp(e.offsetX, e.offsetY);
    cursorStore.setCursorState('playground');
}

function handleMouseOut(e) {
    cursorStore.setCursorState('normal');
}

</script>

