import { ITaskProps } from "./ITaskProps"
import { FC,useMemo } from 'react'
import './style.css'
import pencilIcon from '../../images/icons/pencilIcon.svg'
import trashCartIcon from '../../images/icons/TrashCartIcon.svg'
import { useTodoStore } from "../../hooks"
import { observer } from "mobx-react-lite"

const Task:FC<ITaskProps> = ({description,name,categoryId}) => {
    const store = useTodoStore()
    const category = useMemo(()=>store.getCategoryById(categoryId),[categoryId])
    return (
        <li className="task">
            <div className="task__header">
                <div className="task__header-title task__title">
                    <div className="task__title-taskName">{name}</div>
                    {category && <div className="task__title-categoryName">{category.name}</div>}
                </div>
                <div className="task__header-buttons task__buttons">
                    <div className="task__buttons-button">
                        <img src={pencilIcon} alt="pencilIcon" />
                    </div>
                    <div className="task__buttons-button">
                        <img src={trashCartIcon} alt="trashCartIcon" />
                    </div>
                </div>
            </div>
            <div className="task__description">{description}</div>
        </li>
    )
}

export default observer(Task)