<script setup>
import emojis from "@/components/ui/emojis.vue";
import QuestionView from "./views/QuestionView.vue";
</script>
<template>
  <div class="background-app">
    <RouterView />
    <emojis />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Moon+Dance&display=swap");
:root {
  --cursive: "Moon Dance";

  --color-pink: #ff69b4;
}
.background-app {
  height: auto;
  background-image:
    radial-gradient(circle at 0% 30%, #381124, #1c0a14),
    radial-gradient(circle at 80% 70%, #381124, #1c0a14);
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
