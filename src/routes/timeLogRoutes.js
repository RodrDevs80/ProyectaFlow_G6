import { Router } from "express";
import { createTimeLog, getTimeLogs, getTimeLogById, updateTimeLogById, deleteTimeLogById } from "../controllers/timeLogControllers.js"

const timeLogRouter = Router();

timeLogRouter.post('/timeLog', createTimeLog )
timeLogRouter.get('/timeLog', getTimeLogs )
timeLogRouter.get('/timeLog/:id', getTimeLogById )
timeLogRouter.put('/timeLog/:id', updateTimeLogById )
timeLogRouter.delete('/timeLog/:id', deleteTimeLogById )

export default timeLogRouter;