"use client"
import { useEffect, useState } from "react";
import { createList, createListItem, getLists, getListsById } from "@/api";
import Items from "./items";

export default function Lists() {
    const [lists, setLists] = useState<ListsArray[]>([])
    const [newList, addNewList] = useState({ title: ""})
    const [items, setItems] = useState<ItemsArray[]>([]) 
    const [list, setList] = useState<ListsArray>({id: 0, title: ""})    
    const [item, setItem] = useState<string>("")

    const handleAddItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
    }
    
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (item) {
            createListItem({
                id: 0,
                task: item,
                completed: false
            })
            setItem("")
        }
    }
    const refreshData = () => {
        const fetchLists = async () => {
            const result = await getLists()
            setLists(result.data.data)
        }
        fetchLists()  
    }

    const handleSelect = async (listId:number) => {       
        const result = await getListsById(listId)
        setList(result.data);
        setItems(result.data.item);
    }
    const makeList = async () => {
        await createList(newList)
        refreshData()
    }

    const addItem = (item: ItemsArray) => {
        setItems([...items, item])
        refreshData()
    }

    const deleteItem = (id: number) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const updateStatus = (id: number) => {
        setItems((items) => items.id === id ? {...items, completed: !items.completed} 
        : items);
    }

    useEffect(() => {
        refreshData()        
    }, [])
    return (
        <div className="py-1 px-1 border-2">
            <form onSubmit={event => {
                event.preventDefault()
                makeList()
                addNewList({ title: ""})
            }} className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch">
                <input type="text"
                    placeholder="New List Title" 
                    value={newList.title}
                    onChange={event => addNewList({title: event.target.value})}
                    className="border-4 rounded border-black-600 p-1"/>
                <button type="submit" className="bg-blue-300 px-4 m-1 rounded-lg border-2 border-black hover:bg-opacity-75">
                New List
                </button>
            </form>
            <div>
            <div className="border-4 rounded border-black-600 p-1">
                {lists.map((list) => {
                    return(
                        <div key={list.id} className="border-4 rounded border-red-800">
                        {list.title}
                        <button onClick={() => handleSelect(list.id)} className="bg-blue-300 px-1 rounded-lg border-2 border-black hover:bg-opacity-75">Open</button>
                        </div>
                    )
                    }
                    )}
            </div>
            <div className="border-4 rounded border-pink-600 p-1">
            <p>{list.title}</p>
            <div className="border-4 rounded border-black-600 p-1">
            {items.map((item) => {        
                return (
                    <Items key={item.id} item={item} deleteItem={deleteItem} updateStatus={updateStatus}/> 
                )}
            )}
            </div>
            <div>
            <form action="">
                <label htmlFor="add_item">
                    Add Item:
                </label>
                <input type="text" value={item} id="add_item" onChange={handleAddItem} className="border-2 border-black m-2 rounded-md" />
                <button onClick={handleSubmit} id="add_item" className="bg-green-300 px-4 rounded-lg border-2 border-black hover:bg-opacity-75">Submit</button>
            </form>
            </div>
            </div>
            </div>
        </div>
    );
}


