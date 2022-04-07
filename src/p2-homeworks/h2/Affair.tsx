import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

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

    return (
        <tbody>
        <tr className={s.someClass}>
            <td className={s.st1}>{props.affair.name}</td>
            <td className={s.st2}>{props.affair.priority}</td>
            <td className={s.st3}><button onClick={deleteCallback}>X</button></td>
        </tr>
        </tbody>
    )
}

export default Affair