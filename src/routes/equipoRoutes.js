import { Router } from "express";
import { getAllEquipos, getEquipoById, createEquipo, updateEquipoById, deleteEquipoById } from "../controllers/equipoControllers.js";

const equipoRoutes = Router();

equipoRoutes.get("/equipos", getAllEquipos);

equipoRoutes.get('/equipo-by-id/:id', getEquipoById);

equipoRoutes.post("/equipos", createEquipo);

equipoRoutes.delete('/equipos/:id', deleteEquipoById)

equipoRoutes.put('/equipos/:id', updateEquipoById)


export default equipoRoutes;