import './style.css'
import { Input, Dropdown, Textarea, ConfirmBtn, СancelBtn } from '../../components'
import { ICreateTaskFormProps } from './ICreateTaskFormProps'
import { FC } from 'react'

const CreateTaskForm:FC<ICreateTaskFormProps> = ({openModalHandler}) => {
    const changeHandler = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        console.log(input.value)
    }

    const clickHandler = () => {
        console.log('закрыли форму')
    }

    return (
        <div className='createTaskForm'>
            <div className='createTaskForm__title'>Создание задачи</div>
            <div className='createTaskForm__body'>
                <Input
                    changeHandler={changeHandler}
                    placeholder='Введите имя задачи'
                    maxLength={255}
                />
                <Dropdown/>
                <Textarea
                    changeHandler={changeHandler}
                    placeholder='Введите описание задачи'
                    maxLength={1536}
                />
            </div>
            <div className='createTaskForm__buttons'>
                <ConfirmBtn text='Создать' clickHandler={clickHandler}/>
                <СancelBtn text='Закрыть' clickHandler={openModalHandler}/>
            </div>
        </div>
    )
}

export default CreateTaskForm