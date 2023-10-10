<template>
    <div class="w-full marquee flex overflow-hidden select-none">
        <h1 v-for="idx in parseInt(repeat)" :key="idx" ref="texts" class="flex-shrink-0">
            {{ displayText }}
        </h1>
    </div>
</template>

<script setup>
const { displayText, repeat } = defineProps(['displayText', 'repeat']);
const texts = ref([]);
const loop = ref(null);
onMounted(() => {
    loop.value = horizontalLoop(texts.value, {
        paused: false, 
        repeat: -1, 
        speed: 1.5
    });
})
onBeforeUnmount(() => {
    if(loop.value) loop.value.kill();
})
</script>