<template>
    <div ref="stampDiv" class="absolute uppercase whitespace-nowrap text-3xl lg:text-5xl stamp-mask pointer-events-none"
        :style="`top: ${stamp.y}px; left: ${stamp.x}px; transform:translate(-50%, -50%) rotate(${stamp.rotate}deg); color:${stamp.color}`">
        <div v-if="stamp.styleId <= 1" class="p-1 lg:p-2" :class="stamp.styleId == 0 ? 'border-y-8' : 'border-8 rounded-2xl'"
            :style="`border-color: ${stamp.color}`">
            <div class="px-3 py-2 lg:px-6 lg:py-4 font-heading" :class="stamp.styleId == 0 ? 'border-y-2' : 'border-2 rounded-lg'" :style="`border-color: ${stamp.color}`">
                {{ stamp.text }}
            </div>
        </div>
        <div v-else class="w-16 h-16  lg:w-24 lg:h-24">
            <Icon :name="stamp.icon" class="w-full h-full" />
        </div>
    </div>
</template>

<script setup>
import { useStampsStore } from '~/store/Stamps';
const { $gsap: gsap } = useNuxtApp();
const { stamp, isCurrentStamp } = defineProps({
    stamp: [Object],
    isCurrentStamp: [Boolean]
});
const stampDiv = ref(null);
const stampsStore = useStampsStore();
onMounted(() => {
    if(!isCurrentStamp) {
        gsap.to(stampDiv.value, {
            opacity: 0,
            ease: "Power2.easeInOut",
            delay: 1,
            duration: 5
        })
        .then(() => {
            stampsStore.removeStamp(stamp.id);
        })
    }
})
</script>

<style scoped>
.stamp-mask {
    mask-image: url('/img/stamp-mask.png');
}
</style>