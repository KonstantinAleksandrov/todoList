import { ITaskProps } from "./ITaskProps"
import { FC } from 'react'
import './style.css'
import pencilIcon from '../../images/icons/pencilIcon.svg'
import trashCartIcon from '../../images/icons/TrashCartIcon.svg'

const Task:FC<ITaskProps> = ({description,name}) => {
    return (
        <li className="task">
            <div className="task__header">
                <div className="task__header-title">{name}</div>
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

export default Task