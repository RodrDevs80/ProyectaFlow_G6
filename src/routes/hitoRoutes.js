import { Router } from "express";
import { createHito, getHitos, getHitoById, updateHitoById, deleteHitoById } from "../controllers/hitoControllers.js"

const hitoRouter = Router();

hitoRouter.post('/hitos', createHito )
hitoRouter.get('/hitos', getHitos )
hitoRouter.get('/hitos/:id', getHitoById )
hitoRouter.put('/hitos/:id', updateHitoById )
hitoRouter.delete('/hitos/:id', deleteHitoById )

export default hitoRouter;