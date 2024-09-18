import Swiper from 'swiper';

/* support webp */
import BaseHelpers from "./helpers/BaseHelpers.js";
import {EffectFade, Navigation} from "swiper/modules";

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();
/* // support webp */

const audio = document.querySelector('#background-music');
const volume = document.querySelector('#volume');
const app = document.querySelector('#app');
const nextStepBtns = document.querySelectorAll('[data-next-step]');

let isMuted = true;

volume.addEventListener('click', () => {
    volume.classList.toggle('active');
    if (isMuted) {
        audio.play();
    } else {
        audio.pause();
    }
    isMuted = !isMuted;
});

nextStepBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let step = btn.getAttribute('data-next-step');

        app.removeAttribute('data-step');
        app.setAttribute('data-step', step);
    });
});

new Swiper('.app__slider-js', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        prevEl: '.app__slider-arrow-prev',
        nextEl: '.app__slider-arrow-next',
    },
});