<template>
  <div class="container">
    <h1>Contador</h1>
<p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
<div>
    <button v-on:click="incrementar()"> + 1 </button>
    <button v-on:click="decrementar()"> - 1 </button>
</div>

<!-- 
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p> -->
<!-- 
    <p>{{ numero + 1}}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario.edad }}</p>
    <p>{{ arreglo }}</p>
    1+1
    {{1+1}}
    true?'Es verdadero':'Es falso'
    {{true?'Es verdadero':'Es falso'}} -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            /* numero inicializado en 5 */
            numero:5,
            texto: 'Cristian Olivares',
            activo: true,
            usuario:{
                nombre: "Cristian",
                apellido: "Olivares",
                genero: 'M',
                edad:25
            },
            arreglo: [1,2,3,4,5]
        }
    },
    methods: {
        calcularCuadrado() {
            console.log('calcularCuadrado');
            return this.numero * this.numero;
        },
        incrementar() {
            this.numero++;
        },
        decrementar() {
            this.numero--;
        },
    },
    computed: {
        calCuadrado() {
            console.log('calCuadrado computado');
            return this.numero * this.numero;
        }
    }
}
</script>

<style scoped>

</style>