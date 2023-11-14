import './style.css'
import { ICreateCategoryFormProps } from './CreateCategoryFormProps'
import { FC } from 'react'
import { Input, Textarea, ConfirmBtn, СancelBtn } from '../../../components'
import { useCategoryForm, useTodoStore } from '../../../hooks'
import { observer } from 'mobx-react-lite'

const CreateCategoryForm:FC<ICreateCategoryFormProps> = ({openModalHandler}) => {
    const store = useTodoStore()
    const { category, changeName, changeDescription } = useCategoryForm(
        {
            name: '', 
            description: '',
            id: store.getLastCategotyId()
        }
    )

    const changeInputHandler = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        changeName(input.value)
    }
    
    const changeTextAreaHandler = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        changeDescription(input.value)
    }

    const submitFormData = () => {
        store.addNewCategory(category)
        openModalHandler()
        if(store.isBurgerMenuOpen) {
            store.changeBurgerMenuOpen()
        }
    }

    return (
        <div className="createCategoryForm">
            <div className='createCategoryForm__title'>Создание категории</div>
            <div className='createCategoryForm__body'>
                <Input
                    changeHandler={changeInputHandler}
                    placeholder='Введите имя категории'
                    maxLength={255}
                    value={category.name}
                />
                <Textarea
                    changeHandler={changeTextAreaHandler}
                    placeholder='Введите описание категории'
                    maxLength={1536}
                    value={category.description}
                />
            </div>
            <div className='createCategoryForm__buttons'>
                <ConfirmBtn text='Создать' clickHandler={submitFormData}/>
                <СancelBtn text='Закрыть' clickHandler={openModalHandler}/>
            </div>
        </div>
    )
}

export default observer(CreateCategoryForm)