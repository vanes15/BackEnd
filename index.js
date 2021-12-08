import express from 'express';
import mongoose from 'mongoose'
import bodyParser  from 'body-parser';
const app=express();
const PORT=500;
import rutas from './rutas/rutas.js'

//RUTA PARA EL ARCHIVO HEROES
//app.get('/', (req,res)=>{
  //  res.send('this is the index');

//});

// cors

const mongoAtlasUri =
  "mongodb+srv://vanessa:vane123@cluster0.6e4cz.mongodb.net/Escandalosos?retryWrites=true&w=majority";

try {
  
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

//const dbConnection = mongoose.connection;
//dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
//dbConnection.once("open", () => console.log("Connected to DB!"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
rutas(app)
/*app.get('/heroes',(req, res)=>{
    res.send('this is the route for the heroes');
}); */


//Crear y ejecutar el servidor
app.listen(PORT, ()=>{
    console.log(`se esta escuchando en el puerto ${PORT}`);
})