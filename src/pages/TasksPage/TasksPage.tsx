import './style.css'
import { Header } from '../../components'
import { useTodoStore, useOpenModal } from '../../hooks'
import { observer } from 'mobx-react-lite'
import { ModalWindow, Task, CreateTaskForm } from '../../containers'

const TasksPage = () => {
    const store = useTodoStore()
    const { openModal, openCreateModal, openEditModal, openDeleteModal } = useOpenModal()

    return (
        <div className="tasksPage">
            <Header activePage='tasks' openModalHandler={openCreateModal}/>
            <ul className='tasksPage__list'>
                {store.getTasks().map((task)=>{
                    return (
                        <Task name={task.name} description={task.description} categoryId={task.categoryId} key={task.id}/>
                    )
                })}
            </ul>
            {openModal.createModal && 
                <ModalWindow openModalHandler={openCreateModal}>
                    <CreateTaskForm openModalHandler={openCreateModal}/>
                </ModalWindow> }
        </div>
    )
}

export default observer(TasksPage)