<template>
  <nav>
    <RouterLink to="/valentine/her">
      <div><i class="fa-regular fa-moon"></i></div>
    </RouterLink>
    <RouterLink to="/valentine/bands">
      <div><i class="fa-solid fa-music"></i></div>
    </RouterLink>
    <RouterLink to="/valentine/foods">
      <div><i class="fa-regular fa-star"></i></div>
    </RouterLink>
    <RouterLink to="/valentine/characters">
      <div><i class="fa-solid fa-pizza-slice"></i></div>
    </RouterLink>
    <RouterLink to="/valentine/his">
      <div><i class="fa-regular fa-sun"></i></div>
    </RouterLink>
  </nav>
</template>
<style scoped>
nav {
  height: 60px;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 15px;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(2px);
}

a {
  text-decoration: none;
  color: white;
}

div {
  background-color: #de2b66;
  border-radius: 50%;
  font-size: 0.8em;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 7px #de2b66;
}
</style>
