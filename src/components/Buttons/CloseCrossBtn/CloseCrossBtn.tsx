import './style.css'
import CloseCrossIcon from '../../../images/icons/closeCrossIcon.svg'
import { FC } from 'react'

interface ICloseCrossBtn {
    closeHandler: () => void
}

const CloseCrossBtn:FC<ICloseCrossBtn> = ({closeHandler}) => {
    return (
        <div className="closeCrossBtn" onClick={closeHandler}>
            <img src={CloseCrossIcon} alt="CloseCrossIcon" />
        </div>
    )
}

export default CloseCrossBtn