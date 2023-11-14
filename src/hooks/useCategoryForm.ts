import { useState } from "react";
import { ICategory } from "../types";

export const useCategoryForm = (currentCategory: ICategory) => {
    const [category,setCategory] = useState(currentCategory)

    const changeName = (name: string) => {
        setCategory((prev)=>{
            return {...prev,name}
        })
    }

    const changeDescription = (description: string) => {
        setCategory((prev)=>{
            return {...prev,description}
        })
    }

    return { category, changeName, changeDescription }
}