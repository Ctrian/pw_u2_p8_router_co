<template>
    <h1>Selecciona el Pokemon Correcto</h1>
  <pokemon-image v-bind:pokemon-id="69" :mostrar-imagen="true"/>
  <pokemon-option />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOption from "@/components/PokemonOption.vue";

export default {
  components: {
    PokemonImage,
    PokemonOption
  },
};
</script>

<style scoped>
</style>
