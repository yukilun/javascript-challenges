import { defineStore } from "pinia";

export const useFlipStore = defineStore('flip', () => {
    const states = reactive({});
    const isFliping = ref(false);

    function setState(id, state) {
        states[id] = state;
    }

    function setFliping(fliping) {
        isFliping.value = fliping;
    }

    return { states, setState, isFliping, setFliping };
});