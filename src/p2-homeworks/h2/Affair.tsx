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

function Affair({id, affair, deleteAffairCallback}: AffairPropsType) {

    const deleteCallback = () => deleteAffairCallback(id)

    const priorityTextColor =
        affair.priority === 'high' ? s.high :
            affair.priority === 'middle' ? s.middle :
                affair.priority === 'low' ? s.low : ''

    return (
        <tbody>
        <tr className={s.someClass}>
            <td className={s.st1}>{affair.name}</td>
            <td className={priorityTextColor}>{affair.priority}</td>
            <td><SuperButton onClick={deleteCallback}>X</SuperButton></td>
        </tr>
        </tbody>
    )
}

export default Affair