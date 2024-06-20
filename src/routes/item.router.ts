import { Router } from "express";
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from "../controllers/item.controller"

const itemRouter = Router()

itemRouter.get('/', getAllItems)
itemRouter.get('/:id', getItemById)
itemRouter.post('/', createItem)
itemRouter.patch('/:id', updateItem)
itemRouter.delete('/:id', deleteItem)

export default itemRouter;