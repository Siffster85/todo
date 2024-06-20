import { PrismaClient } from "@prisma/client";

const itemClient = new PrismaClient().item;

export const getAllItems = async (req, res) => {
    try {
        const allItems = await itemClient.findMany()
        res.status(200).json({ data: allItems})
    } catch(err){
        console.log(err);
        
    }
}

export const getItemById = async (req, res) => {
    try {
        const itemId = Number(req.params.id)
        const item = await itemClient.findUnique({
            where: {
                id: itemId
            }
        })
        res.status(200).json({ data: item })
    } catch(err){
        console.log(err);
        
    }
}

export const createItem = async (req, res) => {
    try {
        const itemData = req.body
        const item = await itemClient.create({
            data: itemData
        })
        res.status(201).json({ data: item })
    } catch(err){
        console.log(err);
        
    }
}

export const updateItem = async (req, res) => {
    try {
        const itemId = Number(req.params.id)
        const itemData = req.body
        const item = await itemClient.update({
            where:{
                id: itemId
            },
            data: itemData
        })
        res.status(201).json({ data: {item} })
    } catch(err){
        console.log(err);
        
    }
}

export const deleteItem = async (req, res) => {
    try {
        const itemId = Number(req.params.id)
        const item = await itemClient.delete({
            where:{
                id: itemId
            },
        })
        res.status(201).json({ data: {} })
    } catch(err){
        console.log(err);
        
    }
}