<script setup>
import { ref } from "vue";

const foods = ref([
  {
    id: 1,
    name: "Pizza de Calabresa",
    imagem:
      "https://imgs.search.brave.com/46dAjJVBbVoFXvXcpogpfUtbvhyCoEj0HisdUNUtxdY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EwLzYx/LzBjL2EwNjEwYzBj/OTdlNTIyZjZlN2M3/YzdjNmRjZTgwMzhk/LmpwZw",
  },
  {
    id: 2,
    name: "Nhoque",
    imagem:
      "https://imgs.search.brave.com/tczxYKgCDJsI76vBFyQjTwYrtW8_EZD2bKJBB0Soui0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0YXNuZXN0/bGUuY29tLmJyL3Np/dGVzL2RlZmF1bHQv/ZmlsZXMvc3R5bGVz/L3JlY2lwZV9kZXRh/aWxfZGVza3RvcF9u/ZXcvcHVibGljL3Ny/aF9yZWNpcGVzL2E4/MWRkNjdiNGVlYWVm/ZmIyYWViYjA3NmNi/OWM0OWYzLmpwZz9p/dG9rPUhzLVlwRi0z",
  },
  {
    id: 3,
    name: "Macarrão ao Molho Branco",
    imagem:
      "https://imgs.search.brave.com/sfZbsDzPY_ilH0mLh20fLmNddbcoF2db_dRwJsgjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00MDAvZDNiOGFm/OTAzNzgwMTdkZDI1/Nzc4ZGVjMzU1YmVj/YjkvMjI0MzMtMjEx/OTcyLW9yaWdpbmFs/LmpwZw",
  },
  {
    id: 4,
    name: "Bolo de Morango com Nata",
    imagem:
      "https://imgs.search.brave.com/A8fy5bfOGgBpc2nawn3FxYg74p1pWSrNsMHV0muSlKQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y0L2M5/LzkyL2Y0Yzk5MjA0/NGI2MzNhMTg4OWYw/MmMzOGEzNTQ1ZjY0/LmpwZw",
  },
  {
    id: 5,
    name: "Chocolate Meio Amargo",
    imagem:
      "https://imgs.search.brave.com/IJrtbXbDTpWWQD6hoas-EP1m7XXkrOXSq8rQSYb6jsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/MTMyODczMy9wdC9m/b3RvL3BpZWNlcy1h/bmQtc2hhdmluZ3Mt/b2YtdGFzdHktY2hv/Y29sYXRlLWJhcnMt/b24tZ3JleS10YWJs/ZS1mbGF0LWxheS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WGd5ZUZJRWNuZEJv/WEE0T3VrNmJ4ZGJS/U294NmJpbUFDajRh/YmF1RkFPOD0",
  },
  {
    id: 6,
    name: "Sanduíche Natural",
    imagem:
      "https://imgs.search.brave.com/_hxDeWLJNKiY2BdtEVbjXC1eXrKodYBbK7Qu1uCf6f8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY29va25lbmpv/eS5jb20vdXBsb2Fk/cy8yMDE5LzA1L3Nh/bmR1aWNoZS1uYXR1/cmFsLTAyLmpwZw",
  },
  {
    id: 7,
    name: "Refrigerante",
    imagem:
      "https://imgs.search.brave.com/Ajgx_dTLYuY6v9FrfuZaUnsy4314gjerEKtPBp80DAI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/b2FudGFnb25pc3Rh/LmNvbS91cGxvYWRz/LzIwMjYvMDMvUmVm/cmlnZXJhbnRlLTEy/ODB4NzIwLmF2aWY",
  },
  {
    id: 8,
    name: "Salpicão",
    imagem:
      "https://imgs.search.brave.com/WhQwwEDdvos7xE9So_ljz4bE01IG_jHddTu3BLLNK-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L3NhbHBpY2FvLWRl/LWZyYW5nby1jb20t/YWxoby1wb3JvLUNB/UEEtNzMweDQ4MC5q/cGc",
  },
]);
</script>

<template>
  <div class="container">
    <h1>♡ Comidas Favoritas ♡</h1>
    <div class="foods-grid">
      <div v-for="food in foods" :key="food.id" class="food-card">
        <div class="image-container">
          <img :src="food.imagem" :alt="food.name" />
        </div>
        <div class="food-info">
          <h2>{{ food.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  padding: 40px 20px;
  max-width: 500px;
  margin: auto;
}

.container {
  padding: 40px 20px;
  margin: auto;
}

h1 {
  text-align: center;
  font-family: var(--cursive);
  color: var(--color-pink);
  font-size: 2em;
  margin-bottom: 50px;
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.foods-grid {
  display: grid;
  grid-template-columns: auto auto;
  max-width: 500px;
  gap: 30px;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.food-card {
  animation: fadeIn 0.6s ease-out;
  background: rgba(255, 105, 180, 0.08);
  border: 2px solid var(--color-pink);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.food-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
  background: rgba(255, 105, 180, 0.12);
}

.image-container {
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid var(--color-pink);
}

.food-info {
  padding: 20px 5px;
}

.food-info h2 {
  color: var(--color-pink);
  font-size: 1em;
  text-align: center;
}
</style>
