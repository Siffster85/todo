"use client"
import { useEffect, useState } from "react";
import { createList, createListItem, deleteList, deleteListItem, getLists, getListsById, patchListItem } from "@/api";
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
                task: item,
                completed: false,
                listId: list.id
            }).then(() => handleSelect(list.id)
            ).then(() => setItem("")
        ).catch((error) => {
            console.log(error);
        })
        }
    }
    const refreshData = () => {
        const fetchLists = async () => {
            const result = await getLists()
            setLists(result.data.data)
        }
        fetchLists()
        handleSelect(list.id)
    }

    const handleSelect = async (listId:number) => { 
        if(listId !== 0){
        const result = await getListsById(listId)
        setList(result.data);
        setItems(result.data.item);
    }}
    const makeList = async () => {
        await createList(newList)
        refreshData()
    }

    const removeList = (id: number) => {
        const remove = async () => {
            await deleteList(id)
            setList({id: 0, title: ""})
            setLists(lists.filter((list) => list.id !== id))
        }
        remove()
        refreshData()
    }
    const deleteItem = (id: number) => {
        const remove = async () => {
            await deleteListItem(id)
            setItems(items.filter((item) => item.id !== id))
        }
        remove()
        refreshData()
    }

    const updateStatus = (id: number, isChecked: boolean) => {
        const completedCheck = async () => {
            await patchListItem(id, {completed: isChecked})
            setItems(items.map((items) => items.id === id ? {...items, completed: !items.completed} 
            : items));
        }
        completedCheck()
        refreshData()
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
            {list.id === 0 ? <p>Select a List</p> : <p>{list.title}</p>}
            {list.id === 0 ? <></> : <div className="border-4 rounded border-black-600 p-1">
            {items.length === 0 ? <p>Please Add Items to your To-Do List</p> : <div>
            {items.map((item) => {        
                return (
                    <Items key={item.id} item={item} deleteItem={deleteItem} updateStatus={updateStatus}/> 
                )}
            )}
            </div>}
            </div>}
            {list.id === 0 ? <></> : <div>
            <form action="">
                <label htmlFor="add_item">
                    Add Item:
                </label>
                <input type="text" value={item} id="add_item" onChange={handleAddItem} className="border-2 border-black m-2 rounded-md" />
                <button onClick={handleSubmit} id="add_item" className="bg-green-300 px-4 rounded-lg border-2 border-black hover:bg-opacity-75">Submit</button>
            </form>
            </div>}
            <button onClick={() => removeList(list.id)} className="bg-red-300 px-1 rounded-lg border-2 border-black hover:bg-opacity-75">Delete List</button>
            </div>
            </div>
        </div>
    );
}


