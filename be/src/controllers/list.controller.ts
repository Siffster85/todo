import { PrismaClient } from "@prisma/client";

const listClient = new PrismaClient().list;

export const getAllLists = async (req, res) => {
    try {
        const allLists = await listClient.findMany()
        res.status(200).json({ data: allLists})
    } catch(err){
        console.log(err);
        
    }
}

export const getListById = async (req, res) => {
    try {
        const listId = Number(req.params.id)
        const list = await listClient.findUnique({
            where: {
                id: listId
            },
            include: {
                item: true
            }
        })
        res.status(200).json({ data: list })
    } catch(err){
        console.log(err);
        
    }
}

export const createList = async (req, res) => {
    
    try {
        const listData = req.body
        const list = await listClient.create({
            data: listData
        })
        res.status(201).json({ data: list })
    } catch(err){
        console.log(err);
        
    }
}

export const deleteList = async (req, res) => {
    try {
        const listId = Number(req.params.id)
        const list = await listClient.delete({
            where:{
                id: listId
            },
        })
        res.status(201).json({ data: {} })
    } catch(err){
        console.log(err);
        
    }
}