import './style.css'
import { FC } from 'react'
import { IEditCategoryFormProps } from './EditCategoryFormprops'
import { observer } from 'mobx-react-lite'
import { useCategoryForm, useTodoStore } from '../../../hooks'
import { Input, Textarea, ConfirmBtn, СancelBtn } from '../../../components'

const EditCategoryForm:FC<IEditCategoryFormProps> = ({categoryData, openModalHandler}) => {
    const store = useTodoStore()
    const { category, changeName, changeDescription } = useCategoryForm(categoryData)

    const changeInputHandler = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        changeName(input.value)
    }
    
    const changeTextAreaHandler = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        changeDescription(input.value)
    }

    const submitFormData = () => {
        store.editCategory(category)
        openModalHandler()
    }

    return (
        <div className="editCategoryForm">
            <div className='editCategoryForm__title'>Редактирование категории</div>
            <div className='editCategoryForm__body'>
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
            <div className='editCategoryForm__buttons'>
                <ConfirmBtn text='Создать' clickHandler={submitFormData}/>
                <СancelBtn text='Закрыть' clickHandler={openModalHandler}/>
            </div>
        </div>
    )
}

export default observer(EditCategoryForm)