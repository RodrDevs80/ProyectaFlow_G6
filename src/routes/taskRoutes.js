import { Router } from "express";
import { createTarea, getAllTareas, getTareaById, updateTareaById, deleteTareaById } from "../controllers/taskControllers.js"

const taskRouter = Router();

taskRouter.post('/tarea', createTarea )
taskRouter.get('/tarea', getAllTareas )
taskRouter.get('/tarea/:id', getTareaById )
taskRouter.put('/tarea/:id', updateTareaById )
taskRouter.delete('/tarea/:id', deleteTareaById )

export default taskRouter;