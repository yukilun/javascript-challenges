import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(Flip, ScrollTrigger);

  return {
    provide: {
      gsap,
      Flip,
      ScrollTrigger,
    },
  };
});
