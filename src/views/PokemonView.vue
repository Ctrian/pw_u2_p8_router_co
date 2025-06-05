<template>
  <h1>Selecciona el Pokemon Correcto</h1>
  <pokemon-image v-bind:pokemon-id="69" :mostrar-imagen="true" />
  <pokemon-option :pokemons="vectorPokemon"/>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOption from "@/components/PokemonOption.vue";

import { obtenerOpcionesFachada } from "@/clients/PokemonClient.js";

export default {
  data() {
    return {
      vectorPokemon: [],
    };
  },
  components: {
    PokemonImage,
    PokemonOption,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style scoped></style>
