<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-neutral-50 dark:bg-neutral-800 p-3 pointer-events-none flex justify-center items-center">
        <img ref="image" :src="link" :alt="`thumbnail of ${id}`"
        :data-flip-id="id" @load="handleImageLoaded"
        class="w-[90%] max-w-[800px] mx-auto object-contain shadow-lg" />
    </div>
</template>

<script setup>
import { useFlipStore } from '~/store/Flip';
const flipStore = useFlipStore();
const { $Flip: Flip, $lenis: lenis } = useNuxtApp();

const { id, link } = defineProps(['id','link']);
const image = ref(null);

onMounted(() => {
    handleImageLoaded();
})

function handleImageLoaded() {
    if (image.value && flipStore.states[id]) {
        lenis.scrollTo(0, {
            duration: 1
        });
        Flip.from(flipStore.states[id], {
            targets: image.value,
            ease: "Power2.easeInOut",
            duration: 1
        }).then(() => {
            navigateTo(`/challenge/${id}`);
            flipStore.setFliping(true);
        });
    }
    flipStore.setState(id, null);
}

onBeforeUnmount(() => {
    if (image.value) {
        flipStore.setState(id, Flip.getState(image.value));
    }
})
</script>
