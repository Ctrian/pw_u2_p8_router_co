<template>
  <nav>
    <router-link to="/"> home </router-link> | 
    <router-link to="/estudiante"> Estudiante </router-link> |
    <router-link to="/about"> About </router-link> |
    <router-link to="/contador/numeros"> Contador </router-link> |
    <router-link to="/pregunta"> Pregunta </router-link> |
    <router-link to="/estudiante/tabla"> Estudiante Tabla </router-link> |
    <router-link to="/hm"> Hola Mundo </router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>

</style>