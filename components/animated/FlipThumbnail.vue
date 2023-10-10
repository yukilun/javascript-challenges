<template>
    <img ref="image" :src="link" :alt="`thumbnail of ${id}`" :data-flip-id="id"  @load="handleImageLoaded"/>
</template>

<script setup>
import { useFlipStore } from '~/store/Flip';
const flipStore = useFlipStore();
const { $Flip: Flip } = useNuxtApp();

const { id, link } = defineProps(['id', 'link']);
const image = ref(null);

function handleImageLoaded() {
    flipStore.setState(id, Flip.getState(image.value));
}

onMounted(() => {
    handleImageLoaded();
})
</script>
