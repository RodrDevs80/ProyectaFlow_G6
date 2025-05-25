import { Router } from "express";
import {createTag} from "../controllers/tagControllers.js"

const tagRouter = Router();

tagRouter.post('/tags', createTag )

export default tagRouter;
