<template>
    <div class="text-center md:text-left">
        <Header />
        <ChallengeInfo :challenge="challenge" />
        <ChallengeScreenshots :challenge="challenge" />
        <AnimatedTextMarquee v-if="nextChallenge" displayText="EXPLORE MORE ✦&nbsp;" repeat="10" class="text-3xl opacity-50"/>
        <ChallengeNav v-if="!flipStore.isFliping && nextChallenge" :nextChallenge="nextChallenge" />
    </div>
</template>

<script setup>
import { challenges } from '~/assets/data.json';
const { id } = useRoute().params;

const index = challenges.findIndex((c) => c.id == id);
if(index < 0) {
    throw createError({stateCode: 404, statusMessage: 'Challenge not found', fatal: true});
}

const challenge = challenges[index];
const nextChallenge = index >= challenges.length - 1 ? challenges[0] : challenges[index + 1];

useHead({
    title: `${challenge.name} | JS Challenges` ,
    meta: [
        { name: "description", content: `${challenge.description}`},
    ]
});


import { useFlipStore } from '~/store/Flip';
const flipStore = useFlipStore();
</script>