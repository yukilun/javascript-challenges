import hoverEffect from 'hover-effect';

export default defineNuxtPlugin((nuxtApp) => {
    return {
      provide: {
        hoverEffect
      },
    };
  });

/**
    Basic Usage:
    var myAnimation = new hoverEffect({
        parent: document.querySelector('.my-div'),
        intensity: 0.3,
        image1: 'images/myImage1.jpg',
        image2: 'images/myImage2.jpg',
        displacementImage: 'images/myDistorsionImage.png'
    });
 */
