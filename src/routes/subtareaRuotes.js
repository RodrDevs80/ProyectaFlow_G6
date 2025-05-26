import { Router } from "express";
import { createSubtarea,getSubtareaById,getAllSubtareas,deleteSubtareaById,updateSubtareaById} from "../controllers/subtareaControllers.js";

const subTareaRouter=Router()


subTareaRouter.get('/subtareas',getAllSubtareas())
subTareaRouter.get('/subtarea:id',getSubtareaById())
subTareaRouter.post('/subtarea',createSubtarea())
subTareaRouter.put('/subtarea:id',deleteSubtareaById())
subTareaRouter.delete('/subtara:id',updateSubtareaById())

export default subTareaRouter