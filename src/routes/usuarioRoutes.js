import { Router} from "express";
import { getAllUsuarios,getUsuarioById,createUsuario,updateUsuario,deleteUsuario } from "../controllers/usuarioControllers.js";
const usuarioRoutes = Router();

usuarioRoutes.get('/usuarios',getAllUsuarios);
usuarioRoutes.get('/usuarios/:id',getUsuarioById);
usuarioRoutes.post('/usuarios',createUsuario);
usuarioRoutes.put('/usuarios/:id',updateUsuario);
usuarioRoutes.delete('/usuarios/:id',deleteUsuario);

export default usuarioRoutes;