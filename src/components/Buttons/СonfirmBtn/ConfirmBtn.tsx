import './style.css'
import { FC } from 'react'
import { IConfirmBtnProps } from './IConfirmBtnProps'

const ConfirmBtn:FC<IConfirmBtnProps> = ({text,clickHandler}) => {
    return (
        <div className="confirmBtn" onClick={clickHandler}>{text}</div>
    )
}

export default ConfirmBtn