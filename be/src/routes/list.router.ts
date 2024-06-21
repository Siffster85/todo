import { Router } from "express";
import { getAllLists, getListById, createList, deleteList } from "../controllers/list.controller"

const listRouter = Router()

listRouter.get('/', getAllLists)
listRouter.get('/:id', getListById)
listRouter.post('/', createList)
listRouter.delete('/:id', deleteList)

export default listRouter;