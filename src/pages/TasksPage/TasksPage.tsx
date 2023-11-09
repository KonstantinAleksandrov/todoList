import './style.css'
import { Header, Task } from '../../components'
import { useTodoStore, useOpenModal } from '../../hooks'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { ModalWindow } from '../../containers'

const TasksPage = () => {
    const store = useTodoStore()
    const { openModal, openCreateModal, openEditModal, openDeleteModal } = useOpenModal()

    useEffect(()=>{
        store.loadTasks()
    },[])

    return (
        <div className="tasksPage">
            <Header activePage='tasks' openModalHandler={openCreateModal}/>
            <ul className='tasksPage__list'>
                {store.getTasks().map((task)=>{
                    console.log(task)
                    return (
                        <Task name={task.name} description={task.description} key={task.id}/>
                    )
                })}
            </ul>
            {openModal.createModal && <ModalWindow openModalHandler={openCreateModal}><div>создание</div></ModalWindow> }
            {openModal.editModal && <ModalWindow openModalHandler={openEditModal}><div>редактирование</div></ModalWindow> }
            {openModal.deleteModal && <ModalWindow openModalHandler={openDeleteModal}><div>удаление</div></ModalWindow> }
        </div>
    )
}

export default observer(TasksPage)