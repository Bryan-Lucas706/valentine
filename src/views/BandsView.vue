<script setup>
import { ref } from "vue";

const bands = ref([
  {
    id: 1,
    name: "Metallica",
    font: "Metal mania",
    imagem:
      "https://i.pinimg.com/736x/1e/f3/fd/1ef3fd1c590a5b15d3b4739d8841d814.jpg",
    founded: "1981 em Los Angeles",
    genre: "Heavy Metal, Thrash Metal",
    topSongs: ["Enter Sandman", "The Unforgiven", "Nothing Else Matters"],
    members: [
      "James Hetfield",
      "Kirk Hammett",
      "Robert Trujillo",
      "Lars Ulrich",
    ],
  },
  {
    id: 2,
    name: "Black Sabbath",
    font: "Cherry Bomb One",
    imagem:
      "https://imgs.search.brave.com/LP63v1KD1_SKxZmPAL9_SHvdb7izHGWDXD0blbOKOJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFScVdaVmVleEwu/anBn",
    founded: "1968 em Birmingham, Inglaterra",
    genre: "Heavy Metal, Doom Metal",
    topSongs: ["Iron Man", "Paranoid", "War Pigs"],
    members: ["Ozzy Osbourne", "Tony Iommi", "Geezer Butler", "Bill Ward"],
  },
  {
    id: 3,
    name: "Nirvana",
    font: "Metal Mania",
    imagem:
      "https://imgs.search.brave.com/_0e_mcsNGZsBGc2iWJ4yehv6WPpTP2CAZuSxsUBWZgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk4L2I1/LzgwLzk4YjU4MDBj/YmVhMmY3ODZkNDE2/NWUwYjY5ZWM3YWZm/LmpwZw",
    founded: "1987 em Seattle",
    genre: "Grunge, Alternative Rock",
    topSongs: ["Smells Like Teen Spirit", "Come as You Are", "Lithium"],
    members: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
  },
  {
    id: 4,
    name: "Avenged Sevenfold",
    font: "Mountains of Christmas",
    imagem:
      "https://imgs.search.brave.com/8Wc0JxX5QOaJhBrJzoQS07MESUg16pF6HSkky4TWnZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFqbi1xeFJwcUwu/anBn",
    founded: "1998 em Huntington Park, Califórnia",
    genre: "Heavy Metal, Alternative Metal",
    topSongs: ["Bat Country", "Nightmare", "Seize the Day"],
    members: [
      "M. Shadows",
      "Synyster Gates",
      "Johnny Christ",
      "Brooks Wackkett",
    ],
  },
  {
    id: 5,
    name: "SYSTEM OF A DOWN",
    font: "Black Ops One",
    imagem:
      "https://imgs.search.brave.com/XSZUVETDhZON3dzXqPiLdxaREy6q2fjdwqjRv-A20vU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiL2M5/Lzc4LzNiYzk3ODMz/OWUxNDUxNmMwZGIx/ZTY0MTZmYzM3Yzdl/LmpwZw",
    founded: "1994 em Los Angeles",
    genre: "Alternative Metal, Nu Metal",
    topSongs: ["Toxicity", "Chop Suey!", "Aerials"],
    members: [
      "Serj Tankian",
      "Shavo Odadjian",
      "Daron Malakian",
      "Tomas Haake",
    ],
  },
]);

const expandedId = ref(null);

const toggleExpand = (id) => {
  expandedId.value = expandedId.value === id ? null : id;
};
</script>

<template>
  <div class="container">
    <h1>♡ Bandas Favoritas ♡</h1>
    <div class="bands-list">
      <div v-for="band in bands" :key="band.id" class="band-item">
        <div class="band-header" @click="toggleExpand(band.id)">
          <div class="header-left">
            <span class="emoji">{{ band.emoji }}</span>
            <div class="header-info">
              <h2 :style="{ fontFamily: band.font }">{{ band.name }}</h2>
            </div>
          </div>
          <span
            class="toggle-icon"
            :class="{ expanded: expandedId === band.id }"
            >▼</span
          >
        </div>

        <div v-if="expandedId === band.id" class="band-details">
          <div class="image-container">
            <img :src="band.imagem" :alt="band.name" />
          </div>
          <div class="detail-row">
            <span class="label">Fundada:</span>
            <span class="value">{{ band.founded }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Gênero:</span>
            <span class="value">{{ band.genre }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Top Músicas:</span>
            <span class="value">{{ band.topSongs.join(", ") }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Membros:</span>
            <span class="value">{{ band.members.join(", ") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");

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
  min-height: calc(100vh + 60px);
  height: auto;
}

h1 {
  text-align: center;
  font-family: var(--cursive);
  color: var(--color-pink);
  font-size: 2.5em;
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.bands-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.band-item:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.band-item:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.band-item:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 0.7s both;
}

.band-item:nth-child(4) {
  animation: fadeInUp 0.8s ease-out 1s both;
}

.band-item:nth-child(5) {
  animation: fadeInUp 0.8s ease-out 1.3s both;
}

.band-item {
  background: rgba(255, 105, 180, 0.08);
  border: 2px solid var(--color-pink);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.band-item:hover {
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.2);
  background: rgba(255, 105, 180, 0.12);
}

.band-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.band-header:hover {
  background: rgba(255, 105, 180, 0.05);
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
  font-size: 1.5em;
  font-weight: lighter;
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

.band-details {
  animation: slideIn 0.3s ease-out;
  padding: 20px;
  border-top: 1px solid rgba(255, 105, 180, 0.3);
  background: rgba(255, 105, 180, 0.03);
}

.image-container {
  text-align: center;
  margin-bottom: 20px;
}

.image-container img {
  max-width: 100%;
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  display: block;
  margin: 0 auto;
}

.detail-row {
  display: flex;
  gap: 15px;
  margin-bottom: 12px;
  font-size: 0.95em;
}

.detail-row:last-child {
  margin-bottom: 0;
}

.label {
  color: var(--color-pink);
  font-weight: bold;
  min-width: 80px;
}

.value {
  color: #ccc;
  line-height: 1.4;
}
</style>
