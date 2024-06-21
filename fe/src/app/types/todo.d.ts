interface ItemsArray {
    id: number
    task: string
    completed: boolean
}

interface AddItemProps {
    create: (list: ItemsArray) => void;
}

interface ItemProps {
    item: ItemsArray
    deleteItem: (id: number) => void
    updateStatus: (id: number) => void
}

interface ListsArray {
    id: number
    title: string
}

interface ListProps {
    id: number
}

