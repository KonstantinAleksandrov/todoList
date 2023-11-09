import { ITask } from "./ITask"

export interface ITodoStore {
    tasks: ITask[],
    isLoading: boolean,
    loadTasks: () => void,
    getTasks: () => ITask[],
}