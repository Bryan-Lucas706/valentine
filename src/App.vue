<script setup>
import emojis from "@/components/ui/emojis.vue";
import QuestionView from "./views/QuestionView.vue";
</script>
<template>
  <div>
    <RouterView />
    <emojis />
  </div>
</template>

<style scoped>
div {
  background-image:
    radial-gradient(circle at 0% 30%, #381124, #1c0a14),
    radial-gradient(circle at 80% 70%, #381124, #1c0a14);
}
</style>
