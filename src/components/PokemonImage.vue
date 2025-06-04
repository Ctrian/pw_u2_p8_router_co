<template>
  <div class="image-container">
    <!-- objetivo: mostrar una imagen -->
    <img
      v-if="!mostrar"
      class="ocultar"
      :src="imagenFuente"
      alt="No se puede renderizar la imagen del pokemón"
    />

    <img
      v-if="mostrar"
      v-bind:src="imagenFuente"
      alt="No se puede renderizar la imagen del pokemón"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
        type: Number,
        required: true
    },
    mostrarImagen: {
        type:Boolean,
        required: true,
        default: false
    }
  },
  data() {
    return {
      mostrar: this.mostrarImagen,
    };
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
  /* atras de la imagen con la clase ocultar */
  position: absolute;
  right: 42%;
}

.ocultar {
  filter: brightness(0);
}

.image-container {
  height: 200px;
}
</style>
