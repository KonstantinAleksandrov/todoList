import { useState } from "react";
import { ITask } from "../types";

export const useTaskForm = (currentTask: ITask) => {
    const [task,setTask] = useState(currentTask)

    const changeName = (name: string) => {
        setTask((prev)=>{
            return {...prev,name}
        })
    }

    const changeDescription = (description: string) => {
        setTask((prev)=>{
            return {...prev,description}
        })
    }

    const changeCategory = (id: number) => {
        setTask((prev)=>{
            return {...prev, categoryId: id}
        })
    }

    return {task, changeName, changeDescription, changeCategory}
}