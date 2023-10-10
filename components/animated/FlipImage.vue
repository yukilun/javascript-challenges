<template>
    <img ref="image" :src="link" :data-flip-id="id" class="shadow-lg"/>
</template>

<script setup>
import { useFlipStore } from '~/store/Flip';
const flipStore = useFlipStore();
const { $Flip: Flip, $lenis: lenis } = useNuxtApp();

const { id, link } = defineProps(['id', 'link']);
const image = ref(null);

onMounted(() => {
    if (image.value && flipStore.states[id]) {
        Flip.from(flipStore.states[id], {
            targets: image.value,
            ease: "Power2.easeInOut",
            duration: 1
        }).then(()=> {
            flipStore.setFliping(false);
        });
    }
    flipStore.setState(id, null);
})
</script>
