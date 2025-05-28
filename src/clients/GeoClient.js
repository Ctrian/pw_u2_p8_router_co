import axios from "axios";

const consultarRespuesta = async () => {
    const respuesta = axios.get('https://magicloops.dev/api/loop/e8456127-82a2-4c0d-b776-dad692ce1371/run?input=Hello+World').then(respuesta => respuesta.data)
    console.log();
    return respuesta;
}

// función fachada
export const consultarRespuestaFachada = async () => {
    return await consultarRespuesta();
}