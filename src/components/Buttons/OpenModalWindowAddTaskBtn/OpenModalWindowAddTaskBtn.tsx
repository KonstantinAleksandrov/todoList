import './style.css'
import { FC } from 'react'

interface IOpenModalWindowAddTaskBtn {
    openModalHandler: () => void
}

const OpenModalWindowAddTaskBtn:FC<IOpenModalWindowAddTaskBtn> = ({openModalHandler}) => {
    return (
        <div className="openModalWindowAddTaskBtn" onClick={openModalHandler}>Добавить задачу</div>
    )
}

export default OpenModalWindowAddTaskBtn