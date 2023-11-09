import './style.css'
import { FC } from 'react'
import { HeaderNavigation } from '../HeaderNavigation'
import { OpenModalWindowAddTaskBtn } from '../Buttons'

interface IHeader{
    activePage: 'tasks' | 'categories'
    openModalHandler: () => void
}

const Header:FC<IHeader> = ({activePage, openModalHandler}) => {
    return (
        <header className="header">
            <div className='header__title'>ToDo List</div>
            <HeaderNavigation activePage={activePage}/>
            <OpenModalWindowAddTaskBtn openModalHandler={openModalHandler}/>
        </header>
    )
}

export default Header