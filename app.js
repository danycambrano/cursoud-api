const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const {API_VERSION} =require("./constans");

const app=express();

//importaciones de las rutas
const authRoutes=require("./router/auth");
const userRoutes=require("./router/user");
const menuRoutes=require("./router/menu");
const courseRoutes=require("./router/course");

//configuración del body parse
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar la carpeta estatica
app.use(express.static("uploads"));

//Configuracion del Header HTTP-Cors
app.use(cors());

//configuración de las rutas
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, courseRoutes);


module.exports=app;