import { Router } from "express";
import { getAllProyectos, getProyectosById, createProyecto, updateProyectoById, deleteProyectoById } from "../controllers/proyectoControllers.js";

const proyectoRoutes = Router();

proyectoRoutes.get("/proyectos", getAllProyectos);

proyectoRoutes.get('/proyecto-by-id/:id', getProyectosById);

proyectoRoutes.post("/proyectos", createProyecto);

proyectoRoutes.delete('/proyectos/:id', deleteProyectoById);

proyectoRoutes.put('/proyectos/:id', updateProyectoById);


export default proyectoRoutes;