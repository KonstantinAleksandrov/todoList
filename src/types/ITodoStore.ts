import { ITask } from "./ITask"
import { ICategory } from "./ICategory"

export interface ITodoStore {
    isLoading: boolean,
    loadTasks: () => void,
    getTasks: () => ITask[],
    getCategories: () => ICategory[]
    loadAllData: () => void,
    loadCategories: () => void,
    getCategoryById: (id: number) => ICategory | undefined
}