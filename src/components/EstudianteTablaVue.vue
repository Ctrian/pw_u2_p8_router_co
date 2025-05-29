<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Paciente agregado</h1>
    </div>

    <form class="formulario">
      <div class="input-group">
        <label for="id_nombre">Nombre Completo:</label>
        <input v-model="nuevoNombre" id="id_nombre" type="text" />

        <label for="id_edad">Edad:</label>
        <input v-model="nuevoEdad" id="id_edad" type="number" />

        <label for="id_enfermedad_cronica"
          >¿Padece alguna enfermedad crónica? (Especifique cual):</label
        >
        <input
          v-model="nuevaEnfermedadCronica"
          id="id_enfermedad_cronica"
          type="text"
        />

        <label for="id_sintomas">Síntomas actuales (si tiene):</label>
        <input v-model="nuevoSintomas" id="id_sintomas" type="text" />

        <label for="id_actividad_fisica"
          >Nivel de actividad física semanal:</label
        >
        <select v-model="nuevoActividadFisica" id="id_actividad_fisica" class="select_actividad">
          <option disabled value="">Seleccione una opción</option>
          <option value="sedentario">Sedentario</option>
          <option value="ligero">Ligero</option>
          <option value="moderado">Moderado</option>
          <option value="intenso">Intenso</option>
        </select>
      </div>

      <div class="boton-container">
        <button v-on:click.prevent="agregarEstudiante()" class="boton">
          Agregar
        </button>
      </div>
    </form>

    <div class="tabla-container">
      <table border="2">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Edad</th>
            <th>Enfermedad</th>
            <th>Sintomas</th>
            <th>Actividad</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ nombre, edad, enfermedad, sintomas, actividad } in lista"
            :key="nombre"
          >
            <td>{{ nombre }}</td>
            <td>{{ edad }}</td>
            <td>{{ enfermedad }}</td>
            <td>{{ sintomas }}</td>
            <td>{{ actividad }}</td>
            <td><Button class="bver">Ver</Button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        {
          nombre: "Cristian",
          edad: 25,
          enfermedad: "Gastritis",
          sintomas: "Estres",
          actividad: "Caminata",
        },
        {
          nombre: "Juan",
          edad: 30,
          enfermedad: "Gastritis",
          sintomas: "Estres",
          actividad: "Caminata",
        },
        {
          nombre: "Pedro",
          edad: 28,
          enfermedad: "Gastritis",
          sintomas: "Estres",
          actividad: "Caminata",
        },
        {
          nombre: "María",
          edad: 22,
          enfermedad: "Gastritis",
          sintomas: "Estres",
          actividad: "Caminata",
        },
        {
          nombre: "Ana",
          edad: 27,
          enfermedad: "Gastritis",
          sintomas: "Estres",
          actividad: "Caminata",
        },
        {
          nombre: "Luis",
          edad: 35,
          enfermedad: "Gastritis",
          sintomas: "Estres",
          actividad: "Caminata",
        },
      ],
      mostrar: false,
      nuevoNombre: "",
      nuevoEdad: "",
      nuevaEnfermedadCronica: "",
      nuevoSintomas: "",
      nuevoActividadFisica: "",
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        edad: this.nuevoEdad,
        enfermedad: this.nuevaEnfermedadCronica,
        sintomas: this.nuevoSintomas,
        actividad: this.nuevoActividadFisica,
      };
      this.lista.unshift(nuevo);
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 3000);
      // Limpiar campos
      this.nuevoNombre = "";
      this.nuevoEdad = "";
      this.nuevaEnfermedadCronica = "";
      this.nuevoSintomas = "";
      this.nuevoActividadFisica = "";
    },
  },
};
</script>
<style scoped>
.container {
  min-height: 100vh;
  background: #cde4fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
}

.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}

.input-group label {
  color: black;
  text-align: left;
  margin-bottom: 3px;
  width: 100%;
}

.input-group input {
  background: #387cc3;
  color: white;
  border-radius: 8px;
  border: 2px solid #737171;
  width: 100%;
  margin-bottom: 10px;
  padding: 6px 10px;
  box-sizing: border-box;
}

.select_actividad {
  background: #387cc3;
  border-radius: 8px;
  border: 2px solid #737171;
  color: white;
  padding: 6px 20px;
}

.boton-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.bver {
  background: #387cc3;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  width: auto;
}

.tabla-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

table {
  background: #a8c967;
  width: 100%;
  border-collapse: collapse;
  box-sizing: border-box;
}

th,
td {
  padding: 3px 10px;
  text-align: center;
}
</style>
