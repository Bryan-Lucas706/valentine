<script setup>
import { ref } from "vue";

const emojis = ["❤️", "💕", "💗", "💖", "💞", "🌹", "🌸"];

const petals = ref(
  Array.from({ length: 10 }, () => ({
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    left: Math.random() * 90 + 5 + "%",
    duration: Math.random() * 8 + 7 + "s",
    delay: Math.random() * 7 + "s",
    size: Math.random() * 10 + 12 + "px",
  })),
);
</script>
<template>
  <span
    v-for="(petal, index) in petals"
    :key="index"
    class="petal"
    :style="{
      left: petal.left,
      animationDuration: petal.duration,
      animationDelay: petal.delay,
      fontSize: petal.size,
    }"
  >
    {{ petal.emoji }}
  </span>
</template>

<style scoped>
@keyframes rise {
  0%   { bottom: 0px; opacity: 0; }
  20%  { opacity: 0.7; }  
  80%  { opacity: 0.7; }
  100% { bottom: 110%; opacity: 0; } 
}

.petal {
  opacity: 0;
  position: absolute;
  animation: rise linear infinite; /* repete para sempre */
  z-index: 1;
}
</style>
