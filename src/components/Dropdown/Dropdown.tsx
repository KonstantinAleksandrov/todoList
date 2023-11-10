import './style.css'
import listOpenIcon from '../../images/icons/listOpenIcon.svg'

const Dropdown = () => {
    const selectOption = (e: React.ChangeEvent) => {
        const selectedElem = e.target as HTMLSelectElement
        if (selectedElem.value !== 'default') {
            selectedElem.classList.add('selected');
        } else {
            selectedElem.classList.remove('selected');
        }
    } 

    return (
        <div className="dropdown">
            <label htmlFor="categories" className='dropdown__listOpenIcon'>
                <img src={listOpenIcon} alt="listOpenIcon" />
            </label>
            <div className="dropdown__title">Категория</div>
            <select id='categories' name="categories" className="dropdown__select" onChange={selectOption}>
                <option value="default" className="dropdown__option">Выберите категорию</option>
                <option value="banana" className="dropdown__option">Банан</option>
                <option value="orange" className="dropdown__option">Апельсин</option>
            </select>
        </div>
    )
}

export default Dropdown