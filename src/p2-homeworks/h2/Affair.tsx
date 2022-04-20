import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    id: number
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    }// need to fix
    const priority = props.affair.priority
    const priorityTextColor = `${
        priority === 'high' ? s.high :
            priority === 'middle' ? s.middle :
                priority === 'low' ? s.low : ''
    }`


    return (
        <tbody>
        <tr className={s.someClass}>
            <td className={s.st1}>{props.affair.name}</td>
            <td className={priorityTextColor}>{priority}</td>
            <td><SuperButton onClick={deleteCallback}>X</SuperButton></td>
        </tr>
        </tbody>
    )
}

export default Affair