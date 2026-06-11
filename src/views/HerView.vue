<template>
  <div class="container">
    <div class="container-imagem">
      <img src="../assets/images/Maria-foto.jpeg" alt="" />
      <h1>♡ Maria Eduarda ♡</h1>
    </div>
    <div class="conteudo">
      <div class="pergunta">
        <h2>Quem ela é?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          aliquid recusandae, eum eius facere eveniet obcaecati ea ipsum velit
          voluptas porro! Dolores error ipsum debitis temporibus ullam
          doloremque nihil repellendus!
        </p>
      </div>

      <div class="pergunta">
        <h2>O que ela faz?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          voluptatem veritatis, fugit magnam labore vero doloribus excepturi
          optio debitis modi sunt illo vel totam ullam? Delectus voluptas iste
          eius quisquam!
        </p>
      </div>

      <div class="pergunta">
        <h2>O que ela gosta?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          voluptatem veritatis, fugit magnam labore vero doloribus excepturi
          optio debitis modi sunt illo vel totam ullam? Delectus voluptas iste
          eius quisquam!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 20px;
}

.container-imagem {
  animation: fadeInUp 0.6s ease-out 0.1s both;
  z-index: 2;

  & img {
    width: 200px;
    height: 200px;
    background-color: #e0e0e0;
    border-radius: 50%;

    box-shadow: 0px 0px 15px var(--color-pink);
  }

  h1 {
    font-family: var(--cursive);
    color: var(--color-pink);
    text-align: center;
    margin-bottom: 30px;
  }
}

.conteudo {
  max-width: 700px;
}

.pergunta {
  margin-bottom: 50px;
  padding: 20px;
  border-left: 4px solid var(--color-pink);
  background: rgba(255, 105, 180, 0.05);
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 25px rgba(255, 105, 180, 0.2);
  }

  h2 {
    font-family: var(--cursive);
    color: var(--color-pink);
    font-size: 24px;
  }

  p {
    color: white;
    line-height: 1.8;
  }
}

.pergunta:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.pergunta:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.9s both;
}

.pergunta:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 1.2s both;
}

.texto {
  max-width: 600px;
  text-align: justify;
  color: white;
  letter-spacing: 0.5px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>
