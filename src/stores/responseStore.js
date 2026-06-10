import { ref } from "vue";
import { defineStore } from "pinia";

export const useResponseStore = defineStore("response", () => {
  const answered = ref(
    localStorage.getItem("valentine_answered") === "true" || false,
  );

  function setAnswered(value) {
    answered.value = value;
    localStorage.setItem("valentine_answered", value.toString());
  }

  function reset() {
    answered.value = false;
    localStorage.removeItem("valentine_answered");
  }

  return { answered, setAnswered, reset };
});
