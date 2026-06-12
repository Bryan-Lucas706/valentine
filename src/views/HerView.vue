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
          Ela se chama Maria Eduarda pacheco, e aos 15 de idade conheceu o seu
          verdadeiro amor. Uma mulher tão linda onde não existe palavras que
          posam descrever tamanha perfeição, ela é doce, meiga, fofa, amorosa,
          cheirosa, ela é a mulher onde qualquer homem anseia ter.
        </p>
      </div>

      <div class="pergunta">
        <h2>O que ela faz?</h2>
        <p>
          Ela faz centenas de homens e mulheres ficarem pasmos com sua beleza,
          conquistando o coração de qualquer todos que apenas olhe para ela. Mas
          dentre tantas pessoas desejando à ter, há apenas uma pessoa que
          conseguiu esquentar o coração de gelo dessa morcega.
        </p>
      </div>

      <div class="pergunta">
        <h2>O que ela gosta?</h2>
        <p>
          Maria Eduarda gosta de muitas coisa, pode-se se dizer que ela é bem
          "diferente" nas suas paixões, sendo algumas delas: <br>
          • A musica, tudo mundo gosta de ouvir, mas Maria ama diversos genêros. <br>
          • A comida, a massa é a principal escolha dela (Contendo bastaste molho). <br>
          • Os personagens, eles podem ser uma representação da personalidade ou até mesmo a aparência. <br>
          • E por fim, sua pessoa favorita, sendo Bryan Lucas...
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
  text-align: justify;
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
    line-height: 1.5;
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
