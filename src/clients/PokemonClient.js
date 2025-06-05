import axios from "axios";

const consumirPokemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(respuesta => respuesta.data)
    return respuesta;
}

const obtenerObjetoPokemon = async (numeroID) => {
    const data = await consumirPokemon(numeroID);
    console.log(data.name);
    const pokemon = {
        nombre: data.name,
        id: data.id
    }
    return pokemon;
}

const obtenerArregloNumerico = (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 510);
    }
    return vector;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerArregloPokemon = async (arregloNumerico) => {
    const vector = [];
    for (let numero of arregloNumerico) {
        const objetoPokemon = await obtenerObjetoPokemon(numero);
        vector.push();
    }
    return vector;
}

const obtenerOpciones = async (longitud) => {
    const vector = obtenerArregloNumerico(longitud);
    const vectorObjetos = await obtenerArregloPokemon(vector);
    return vectorObjetos;
}

// Función fachada (ya no lo usaremos)
export const consumirPokemonFachada = async (id) => {
    return await consumirPokemon(id);
}

// Función fachada
export const obtenerOpcionesFachada = async (longitud) => {
    return await obtenerOpciones(longitud);
}