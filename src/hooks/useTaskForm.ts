import { useState } from "react";

interface ICurrentTask {
    name: string,
    description: string,
    categoryName: string
}

export const useTaskForm = (currentTask: ICurrentTask) => {
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
}