import { Router } from "express";
import { createTag, getAllTags, getTagById,updateTagById, deleteTagById } from "../controllers/tagControllers.js"

const tagRouter = Router();

tagRouter.post('/tags', createTag )
tagRouter.get('/tags', getAllTags )
tagRouter.get('/tags/:id', getTagById )
tagRouter.put('/tags/:id', updateTagById )
tagRouter.delete('/tags/:id', deleteTagById )

export default tagRouter;
