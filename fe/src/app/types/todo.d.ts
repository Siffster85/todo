interface ItemsArray {
    id: number
    task: string
    completed: boolean
    list: number
}

interface AddItemProps {
    addItem: (list: ItemsArray) => void;
}

interface ItemProps {
    item: ItemsArray
    deleteItem: (id: number) => void
    updateStatus: (id: number, isChecked: boolean) => void
}

interface ListsArray {
    id: number
    title: string
}

interface ListProps {
    id: number
}

