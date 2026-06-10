<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useResponseStore } from "@/stores/responseStore";

const router = useRouter();
const responseStore = useResponseStore();

const noButtonX = ref("50%");
const noButtonY = ref("50%");
const noButtonText = ref("Não");

// const noTexts = ["Não", "Nope", "Nunca", "De jeito nenhum", "Que nada", "Nega"];

function getRandomPosition() {
  const x = Math.random() * 80; // 10% a 90% do viewport
  const y = Math.random() * 80 + 10;
  return { x, y };
}

function handleYes() {
  responseStore.setAnswered(true);
  router.push("/valentine/her");
}

function handleNo() {
  const pos = getRandomPosition();
  noButtonX.value = pos.x;
  noButtonY.value = pos.y;

  // const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
  // noButtonText.value = randomText;
}

function getRandomTextColor() {
  const colors = ["#ff6b9d", "#c44569", "#f8b195", "#ff69b4", "#ff1493"];
  return colors[Math.floor(Math.random() * colors.length)];
}
</script>

<template>
  <main>
    <p>Do you wanna <strong>Marry</strong> with me?</p>
    <div class="buttons-container">
      <button class="yes-btn" @click="handleYes">Sim</button>
      <button
        class="no-btn"
        @click="handleNo"
        :style="{
          left: `${noButtonX}%`,
          top: `${noButtonY}%`,
          color: getRandomTextColor(),
        }"
      >
        {{ noButtonText }}
      </button>
    </div>
  </main>
</template>
<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
}

p {
  font-size: 1.5em;
  padding: 0px 10px;
  margin-bottom: 2em;
  text-align: center;
}

strong {
  color: #ff69b4;
}

.buttons-container {
  position: relative;
  width: 200px;
  height: 100px;

  & button {
    padding: 12px 30px;
  }
}

.yes-btn {
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  z-index: 10;
}

.yes-btn:hover {
  background-color: #ff1493;
  transform: scale(1.05);
}

.yes-btn:active {
  transform: scale(0.95);
}

.no-btn {
  position: fixed;
  margin-left: 2em;
  background-color: transparent;
  border: 2px solid currentColor;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  z-index: 5;
}

.no-btn:hover {
  transform: scale(1.1);
}

.no-btn:active {
  transform: scale(0.9);
}
</style>
