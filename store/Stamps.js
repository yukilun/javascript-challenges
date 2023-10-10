import { defineStore } from "pinia";

import { stampOptions } from "~/assets/data.json";

export const useStampsStore = defineStore('stamps', ()=>{
    const stamps = reactive([]);
    const currentStamp = ref(getRandomStamp());
    const isHover = ref(false);
    const counter = ref(0);

    function getRandomStamp(x=0, y=0) {
        let stamp = {x: x, y: y};
        stamp.styleId = randomNum(0, 2);
        stamp.color =  `hsl(${randomNum(0, 360)},${stampOptions.colorSaturation},${stampOptions.colorLightness})`;
        stamp.rotate = randomNum(-15, 15);
        if(stamp.styleId <= 1) {
            stamp.text = stampOptions.texts[randomNum(0, stampOptions.texts.length - 1)];   
        }
        else {
            stamp.icon = stampOptions.icons[randomNum(0, stampOptions.icons.length - 1)]; 
        }
        return stamp;
    }

    function updateStamp(x, y) {
        currentStamp.value.x = x;
        currentStamp.value.y = y;
    }

    function addStamp(x, y) {
        currentStamp.value.id = counter.value++;
        currentStamp.value.x = x;
        currentStamp.value.y = y;
        stamps.push(currentStamp.value);
        currentStamp.value = getRandomStamp(x, y);
    }

    function removeStamp(id) {
        let idx = stamps.findIndex((s) => s.id == id);
        stamps.splice(idx, 1);
    }

    function hover() {
        isHover.value = true;
    }

    function notHover() {
        isHover.value = false;
    }

    return {stamps, currentStamp, isHover, updateStamp, addStamp, removeStamp, hover, notHover};

});