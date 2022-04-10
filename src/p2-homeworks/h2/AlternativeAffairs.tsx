import React from 'react'
import {AffairType} from './HW2';
import s from './AlternativeAffairs.module.css'

type AffairPropsType = {
    id: number
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

export function AlternativeAffairs(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    }
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