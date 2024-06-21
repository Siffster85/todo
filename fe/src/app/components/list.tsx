import { getListsById } from "@/api";
import AddItem from "./item";
import Items from "./items";
import { useEffect, useState } from "react";

export default function List ({id}: ListProps) {
    const [items, setItems] = useState<ItemsArray[]>([])

    const loadItems = () => {
        const fetchItems = async () => {
            const res =  await getListsById(id)
            setItems(items => [...items, res.data])
        }
        fetchItems() 
    }
    const addItems = (item: ItemsArray) => {
        
        setItems([...items, item])
        loadItems()
    }

    const deleteItem = (id: number) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const updateStatus = (id: number) => {
        setItems(        (item) => item.id === id ? {...item, completed: !item.completed} 
        : item);
    }
    useEffect (() => {
        loadItems()
    }, [])

    return (
        <div>
        {items.map((item) => {
            return (
                <Items key={item.id} item={item} deleteItem={deleteItem} updateStatus={updateStatus}/>
            )}
        )
        }
        </div>
)
}
