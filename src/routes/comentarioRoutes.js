import { Router } from "express";
import { getAllComentarios,getComentarioById,deleteComentarioById,updateComentarioById,createComentario } from "../controllers/comentarioControllers";

const comentarioRouter=Router()

comentarioRouter.get('/comentarios',getAllComentarios())
comentarioRouter.get('/comentario:id',getComentarioById())
comentarioRouter.delete('/comentario:id',deleteComentarioById())
comentarioRouter.post('/comentario',createComentario())
comentarioRouter.put('/comentario:id',updateComentarioById())

export default comentarioRouter