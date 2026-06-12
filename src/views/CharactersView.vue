<script setup>
import { ref } from "vue";

const characters = ref([
  {
    id: 1,
    name: "Dean Winchester",
    phrase: "Lindo, gostoso e rockeiro igual você meu momozin.",
    image:
      "https://imgs.search.brave.com/nI-7iVqpstnywjqOQ11Nz91wsXPb1eCQ0TLssfeinNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFoS3kra04wckwu/anBn",
  },
  {
    id: 2,
    name: "Jax",
    phrase:
      "O Jax tem muitos misterios e leva o terror como entretenimento, igualzinho a você.",
    image:
      "https://imgs.search.brave.com/OyVoA_C9z5V44tj2WaPa_FdqHPcZAxXmlznLJzPo1K4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Z2ltbWUteW91ci1h/Y3R1YWwtcGljdHVy/ZXMtb2YtamF4LW5v/LW1lbWVzLW5vLWpv/a2VzLWFsbC1qYXgt/djAtd203ODUzNHdn/enhiMS5qcGVnP3dp/ZHRoPTQzMSZmb3Jt/YXQ9cGpwZyZhdXRv/PXdlYnAmcz0wNmEx/NzljNGU4YjJlMTNl/NzM2YjU2OGFjODJl/Y2U4YTcxZmMzYmY4",
  },
  {
    id: 3,
    name: "Alastor",
    phrase: "Ele é tanto assustador como elegante, como, minha namorada linda.",
    image:
      "https://imgs.search.brave.com/cFPKNPv5swfhe0ddqxN4iE6xRoB81KIS_RXM4uxtXdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2hvdy1tZS15b3Vy/LWFsYXN0b3ItbWVt/ZXMtZXhjZXB0LWl0/LWNhbnQtbWVudGlv/bi1zdGVhbGluZy12/MC1ia3VienJxZTU3/MWQxLmpwZWc_d2lk/dGg9MzIwJmZvcm1h/dD1wanBnJmF1dG89/d2VicCZzPTQzZWM5/NDc5YTliZmY1Yzc2/NDk1ZDRiZWE1MzA4/MmYyMGUwZWM0OGI",
  },
  {
    id: 4,
    name: "Draculaura",
    description: "",
    phrase:
      "Uma vampira fashionista, com cabelo rosa, doce e apaixonada, teria como existir uma personagem que te representasse melhor?",
    image:
      "https://imgs.search.brave.com/inflFGH7wh9e5GEvsIhQzHMVsVcfL5hMaqTViwgKEtw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjL2Iw/LzdhLzJjYjA3YWEz/MmE5NzIzODdjNzRj/ODI3Y2I2YjE3NzQ0/LmpwZw",
  },
]);

const expandedId = ref(null);

const toggleExpand = (id) => {
  expandedId.value = expandedId.value === id ? null : id;
};
</script>

<template>
  <div class="container">
    <h1>♡ Personagens Favoritos ♡</h1>
    <div class="characters-list">
      <div
        v-for="character in characters"
        :key="character.id"
        class="character-item"
      >
        <div class="character-header" @click="toggleExpand(character.id)">
          <div class="header-left">
            <span class="emoji">{{ character.emoji }}</span>
            <div class="header-info">
              <h2>{{ character.name }}</h2>
              <p>{{ character.description }}</p>
            </div>
          </div>
          <span
            class="toggle-icon"
            :class="{ expanded: expandedId === character.id }"
            >▼</span
          >
        </div>

        <div v-if="expandedId === character.id" class="character-details">
          <div class="character-image-wrapper">
            <img
              :src="character.image"
              :alt="character.name"
              class="character-image"
              @error="(e) => (e.target.style.display = 'none')"
            />
          </div>
          <div class="phrase-box">
            <p class="phrase">{{ character.phrase }}</p>
          </div>
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
    max-height: 700px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.container {
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-family: var(--cursive);
  color: var(--color-pink);
  font-size: 2.5em;
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.characters-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.character-item:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.character-item:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.character-item:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 0.7s both;
}

.character-item:nth-child(4) {
  animation: fadeInUp 0.8s ease-out 1s both;
}

.character-item:nth-child(5) {
  animation: fadeInUp 0.8s ease-out 1.3s both;
}

.character-item {
  background: rgba(255, 105, 180, 0.08);
  border: 2px solid var(--color-pink);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.character-item:hover {
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.2);
  background: rgba(255, 105, 180, 0.12);
}

.character-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.character-header:hover {
  background: rgba(255, 105, 180, 0.05);
}

.header-left {
  display: flex;
  gap: 20px;
  align-items: center;
  flex: 1;
}

.emoji {
  font-size: 3em;
  flex-shrink: 0;
}

.header-info {
  flex: 1;
}

.header-info h2 {
  color: var(--color-pink);
  margin: 0 0 5px 0;
  font-size: 1.4em;
}

.header-info p {
  color: #aaa;
  margin: 0;
  font-size: 0.95em;
}

.toggle-icon {
  color: var(--color-pink);
  font-size: 1.2em;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.toggle-icon.expanded {
  transform: rotate(180deg);
}

.character-details {
  animation: slideIn 0.3s ease-out;
  padding: 20px;
  border-top: 1px solid rgba(255, 105, 180, 0.3);
  background: rgba(255, 105, 180, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.character-image-wrapper {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-pink);
  box-shadow: 0 0 20px rgba(255, 105, 180, 0.3);
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.phrase-box {
  background: rgba(255, 105, 180, 0.1);
  border-left: 4px solid var(--color-pink);
  border-radius: 8px;
  padding: 16px 20px;
  width: 100%;
  max-width: 500px;
}

.phrase {
  color: #ddd;
  font-size: 1.05em;
  font-style: italic;
  margin: 0;
  line-height: 1.6;
  text-align: center;
}
</style>
