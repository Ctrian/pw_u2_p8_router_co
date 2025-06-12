<template>
  {{ mensaje2 }}
  <div class="options-container">
    <ul>
      <li
        @click="comunicarClick(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    comunicarClick(id) {
      console.log("click...");
      console.log(id);
      const objetoEnviado = {
        atributo1: id,
        atributo2: "Oli",
        atributo3: true,
      };
      this.$emit("seleccionado", objetoEnviado);
    },
  },
  data() {
    return {
      mensaje2: "mensaje 2",
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
.options-container {
  display: flex;
  justify-content: center;
}
li:hover {
  background: rgba(0, 0, 0, 0.01);
}
</style>
