import mongoose from 'mongoose';

//crear un objero schema
const Schema = mongoose.Schema

//construir 
const PersonajeSchema = new Schema({
    nombre:{
        type:String,
        required:'nombre vacio'
    },
    tipo:{
        type: String,
    },
    personalidad:{
        type: String,
    },
    caracteristicas:{
        type: String,
    },
    gustos:{
        type: String,
    },
    fecha_creacion:{
        type: Date,
        default: Date.now
    }
})
export default PersonajeSchema;