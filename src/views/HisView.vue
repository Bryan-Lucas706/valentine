<template>
  <div class="container">
    <div class="container-imagem">
      <img src="../assets/images/Bryan-foto.jpeg" alt="" />
      <h1>♡ Bryan ♡</h1>
    </div>
    <div class="conteudo">
      <div class="pergunta">
        <h2>Quem ele é?</h2>
        <p>
          O Bryan amassado tem 18 anos de idade, e ele busca um futuro livre,
          calmo e longe de qualquer preocupação junto com a sua namorada Maria
          Eduarda.
        </p>
      </div>

      <div class="pergunta">
        <h2>O que ele faz?</h2>
        <p>
          Bryan amassado ele é um trabalhador da 3C+ que ganha só R$1500,00, ele
          está nesse emprego para crescer lá dentro e conseguir oportunidades de
          Dev. Ele é um homem romântico que idolatra e trata como soperania sua
          mulher.
        </p>
      </div>

      <div class="pergunta">
        <h2>O que ele gosta?</h2>
        <p>
          As unicas coisas que o Bryan amassado. gosta é sua namorada, ela é a
          pessoa mais importante para ele, uma mulher tão magnifica da cabeças
          aos pés, ele mataria qualquer um e morreria sem exitar, para salvar a
          vida de sua dama, e seria um enorme prazer para ele fazer isso.
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

.pergunta:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.pergunta:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.9s both;
}

.pergunta:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 1.2s both;
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
    color: var(--color-pink);
    margin-bottom: 10px;
    font-size: 1.3em;
  }

  p {
    color: #ccc;
    line-height: 1.6;
    margin: 0;
  }
}
</style>
