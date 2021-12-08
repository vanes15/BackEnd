import {insertPersonaje, getPersonajes, getPersonajeById, updatePersonaje, deletePersonaje} from "../Controladores/personajeController.js";

const rutas = function (app){
    app.route('/personajes')
    .get(getPersonajes)
    .post(insertPersonaje)

    app.route('/personajes/:personajeId')
    .get(getPersonajeById)
    .put(updatePersonaje)
    .delete(deletePersonaje)
}

export default rutas;