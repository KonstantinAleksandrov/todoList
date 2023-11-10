import { makeAutoObservable,runInAction } from "mobx"
import { dataService } from "../services"
import { ITask ,ITodoStore, ICategory } from "../types"

class TodoStore implements ITodoStore{
    private tasks: ITask[]
    private categories: ICategory[]
    public isLoading: boolean
    constructor() {
        this.tasks = []
        this.categories = []
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

    loadCategories = async() => {
        try {
            this.changeLoading()
            const categories = await dataService.getCategories<ICategory[]>()
            runInAction(() => {
                this.categories = categories
                this.changeLoading()
            })
        } catch (error) {
            console.log(error)
        }
    }

    loadAllData = async () => {
        try {
            this.changeLoading()
            const data = await dataService.getAllData<ITask[],ICategory[]>()
            runInAction(() => {
                this.tasks = data.tasks
                this.categories = data.categories
                this.changeLoading()
            })
        } catch (error) {
            console.log(error)
        }
    }

    getTasks = () => {
        return this.tasks
    }

    getCategories = () => {
        return this.categories
    }

    getCategoryById = (id: number): ICategory | undefined => {
        return this.categories.find((category)=>category.id === id)
    }

    changeLoading = () => {
        this.isLoading = !this.isLoading
    }
}

export default TodoStore