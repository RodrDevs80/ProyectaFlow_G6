import { Router } from "express";
import { getAllTareaXtag,getTareaXtagByID,createTareaXtag,updateTareaXtag,deleteTareaXtag } from "../controllers/tareaXtagControllers.js";
const tareaXtagRoutes = Router();

tareaXtagRoutes.get('/tareasxtags',getAllTareaXtag);
tareaXtagRoutes.get('/tareasxtags/:id',getTareaXtagByID);
tareaXtagRoutes.post('/tareasxtags',createTareaXtag);
tareaXtagRoutes.put('/tareasxtags/:id',updateTareaXtag);
tareaXtagRoutes.delete('/tareasxtags/:id',deleteTareaXtag);

export default tareaXtagRoutes;

