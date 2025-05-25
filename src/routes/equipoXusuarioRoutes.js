import { Router } from "express";
import { getAllEquipoXusuario,getEquipoXusuarioByID,createEquipoXusuario,updateEquipoXusuario,deleteEquipoXusuario } from "../controllers/equipoXusuarioControllers.js";
const equipoXusuarioRoutes = Router();

equipoXusuarioRoutes.get('/equiposXusuarios',getAllEquipoXusuario);
equipoXusuarioRoutes.get('/equiposXusuarios/:id',getEquipoXusuarioByID);
equipoXusuarioRoutes.post('/equiposXusuarios',createEquipoXusuario);
equipoXusuarioRoutes.put('/equiposXusuarios/:id',updateEquipoXusuario);
equipoXusuarioRoutes.delete('/equiposXusuarios/:id',deleteEquipoXusuario);

export default equipoXusuarioRoutes;

