<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />

    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />

    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" id="id_genero" type="text" />

    <label for="id_edad">Edad:</label>
    <input v-model="nuevoEdad" id="id_edad" type="number" />

    <label for="id_curso">Curso:</label>
    <input v-model="nuevoCurso" id="id_curso" type="text" />

    <button v-on:click="agregarEstudiante()" class="boton">Agregar</button>
    <!-- {{ nuevoNombre }} -->
    <ul>
      <!-- <li v-for="estu in lista" :key="estu.nombre"> Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}</li> -->
      <li
        v-for="{ nombre, apellido, genero, edad, curso } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Genero: {{ genero }} -
        Edad {{ edad }} - Curso {{ curso }}
      </li>
    </ul>

    <div>
      <button v-on:click="ontenerPathVariable()">Prueba</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //propiedad reactiva para el nombre
      // nuevoNombre: "Nuevo",
      // nuevoApellido: "Nuevo",
      // nuevoGenero: "M",
      // nuevoEdad: 0,
      // nuevoCurso: "Vue",
      //propiedad reactiva de tipo arreglo
      lista: [
        {
          nombre: "Cristian",
          apellido: "Olivares",
          genero: "M",
          edad: 25,
          curso: "Vue",
        },
        {
          nombre: "Juan",
          apellido: "Pérez",
          genero: "M",
          edad: 30,
          curso: "React",
        },
        {
          nombre: "Pedro",
          apellido: "Gómez",
          genero: "M",
          edad: 28,
          curso: "Angular",
        },
        {
          nombre: "María",
          apellido: "López",
          genero: "F",
          edad: 22,
          curso: "Vue",
        },
        {
          nombre: "Ana",
          apellido: "Martínez",
          genero: "F",
          edad: 27,
          curso: "React",
        },
        {
          nombre: "Luis",
          apellido: "Fernández",
          genero: "M",
          edad: 35,
          curso: "Angular",
        },
        {
          nombre: "Jose",
          apellido: "Ramirez",
          genero: "M",
          edad: 40,
          curso: "Vue",
        },
      ],
    };
  },
  //metodos
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        genero: this.nuevoGenero,
        edad: this.nuevoEdad,
        curso: this.nuevoCurso,
      };
      //agregar un nuevo estudiante a la lista {primero}
      this.lista.unshift(nuevo);

      // agregar un nuevo estudiante a la lista {final}
      // this.lista.push(nuevo);
    },
    ontenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);

      const anio = this.$route.query.anio;
      console.log(anio);

      const mes = this.$route.query.mes;
      console.log(mes);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    const cedula = this.$route.params.cedula;
    console.log(cedula);

    const anio = this.$route.query.anio;
    console.log(anio);

    const mes = this.$route.query.mes;
    console.log(mes);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log('beforeUnmounted');
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
.container {
  background: white;
  border: 1px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px;
  padding: 50px 20px 20px 100px;
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  color: black;
  text-align: left;
  padding: 3px;
}

input {
  background: #387cc3;
  color: white;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #387cc3;
  padding: 10px 15px;
}

li {
  text-align: left;
}

button {
  background: #387cc3;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  width: 150px;
  margin: 0 auto;
}

ul {
  list-style: none;
  margin-top: 60px;
  margin: 1px solid black;
}

li {
  background: #387cc3;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: white;
  font-size: 25px;
}
</style>
