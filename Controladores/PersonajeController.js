import mongoose  from "mongoose";
import PersonajeSchema  from "../Models/PersonajeModel.js";

//object creando a partir de shema de personaje
const Personaje = mongoose.model('Personaje', PersonajeSchema)
export const insertPersonaje=(req, res)=>{
//accion de isertar nuevo personajea
//nuevo objero nasado en el DAD
let nuevoPersonaje= new Personaje(req.body)
//grabar personaje en mongo
nuevoPersonaje.save((error, personaje)=>{
    if(error){
        res.send(`Error detectado: ${error}`)
    }else{
        res.json(personaje)
    }
}
)
}
export const getPersonajes=(req, res)=>{
    Personaje.find({},(error, personajes)=>{
        if(error){
            res.send(error)
        }
        else{
            res.json(personajes)
        }
    })

}
// Acción para obtener una persona por :personajeId (El detalle)
export const getPersonajeById=(req, res)=>{
    Personaje.findById(req.params.personajeId, (error, personajePorId)=>{
        if(error){
            res.send(`Error detectado en el get por id: ${error}`);
        }else{
            res.json(personajePorId);
        }
    });
}
//Acción para actualizar una persona por :personajeId 
export const updatePersonaje=(req, res)=>{
    Personaje.findOneAndUpdate(
                                {_id:req.params.personajeId}, 
                                req.body,
                                {
                                    new: true
                                },
    (error)=>{
        if(error){
            res.send(`Error detectado en el insert: ${error}`);
        }else{
            res.send('El registro fue actualizado exitosamente');
        }
    })
}

//Acción para eliminar una persona por _id:personajeId
export const deletePersonaje=(req, res)=>{  
    Personaje.deleteOne({_id: req.params.personajeId}, (error, personajeDelete)=>{
        if(error){
            res.send(`Error detectado en el delete: ${error}`);
        }else{
            res.send('El registro fue eliminado exitosamente');
        }
    });
}