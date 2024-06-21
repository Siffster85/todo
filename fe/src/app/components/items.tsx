
export default function Items({item, deleteItem, updateStatus}: ItemProps) {
    return (
        //loop items from DB in here and create multiple items within the list from DB
        <div className="flex items-center py-1 px-1">
            <label className="peer flex gap-2 items-center m-2">
                <input onChange={event => updateStatus(item?.id)} type="checkbox" className="border-black h-5 w-5 accent-purple-700 peer"/>
                <p className="peer-checked:line-through decoration-2"> 
                    {item?.task}
                </p>
            </label>
            <button onClick={() => deleteItem(item?.id)} className="bg-red-300 px-1 rounded-lg border-2 border-black hover:bg-opacity-75">Remove</button>
        </div>
    );
}