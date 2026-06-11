<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
<template>
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
  <Navbar />
</template>
<style scoped>
/* Global — transição de rota dentro do AppLayout */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
