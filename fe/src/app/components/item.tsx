import { createListItem } from "@/api"
import { useState } from "react"

export default function Item({create}: AddItemProps) {

    const [item, setItem] = useState<string>("")

    const handleAddItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
    }
    
    //Will need to replace the random number with an index key
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

    return (
        //need to create function that takes input from here and stores in the DB
        //Use Zod here for validation
        <div>
            <form action="">
                <label htmlFor="add_item">
                    Add Item:
                </label>
                <input type="text" value={item} id="add_item" onChange={handleAddItem} className="border-2 border-black m-2 rounded-md" />
                <button onClick={handleSubmit} id="add_item" className="bg-green-300 px-4 rounded-lg border-2 border-black hover:bg-opacity-75">Submit</button>
            </form>
        </div>
    )
}