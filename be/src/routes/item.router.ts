import { Router } from "express";
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from "../controllers/item.controller"

const itemRouter = Router()

itemRouter.post('/', createItem)
itemRouter.patch('/:id', updateItem)
itemRouter.delete('/:id', deleteItem)

//The Below 2 functions are not used in the app but are useful for testing
itemRouter.get('/', getAllItems)
itemRouter.get('/:id', getItemById)

export default itemRouter;