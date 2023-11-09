import { makeAutoObservable,runInAction } from "mobx"
import { dataService } from "../services"
import { ITask ,ITodoStore } from "../types"

class TodoStore implements ITodoStore{
    public tasks: ITask[]
    public isLoading: boolean
    constructor() {
        this.tasks = []
        this.isLoading = false
        makeAutoObservable(this)
    }

    loadTasks = async() => {
        try {
            this.changeLoading()
            const tasks = await dataService.getTasks<ITask[]>()
            runInAction(() => {
                this.tasks = tasks
                this.changeLoading()
            })
        } catch (error) {
            console.log(error)
        }
    }

    getTasks = () => {
        return this.tasks
    }

    changeLoading = () => {
        this.isLoading = !this.isLoading
    }
}

export default TodoStore