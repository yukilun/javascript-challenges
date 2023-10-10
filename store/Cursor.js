import { defineStore } from "pinia";

export const useCursorStore = defineStore('cursor', () => {
    const cursorState = ref('normal');
    function setCursorState(state) {
        cursorState.value = state;
    }
    return { cursorState, setCursorState };
})