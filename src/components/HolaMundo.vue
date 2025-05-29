<template>
  <div class="container">
    <h1 class="titulo">Universidad Central del Ecuador</h1>
    <h2>Facultad de Ingeniería</h2>
    <h3>Carrera de Computaci&#243;n</h3>
    <h4>Hola mundo desde Vue</h4>
    <p>Cristian Olivares</p>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Añadir scoped para solo añadir a determinado componente -->
<style scoped>
.titulo {
    color: red;
}

h2 {
    background: blue;
}

p {
    color: green;
    background: blue;
    font-family: 'Times New Roman', Times, serif;
    font-size: 40px;
}
</style>