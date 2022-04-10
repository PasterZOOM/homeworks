import React from 'react'
import {AffairType} from './HW2';
import s from './AlternativeAffairs.module.css'
import {Button} from './Button';

type AffairPropsType = {
    id: number
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

export function AlternativeAffairs(props: AffairPropsType) {
    return (
        <tbody>
        <tr className={s.someClass}>
            <td className={s.st1}>{props.affair.name}</td>
            <td className={s.st2}>{props.affair.priority}</td>
            <td className={s.st3}>
                <Button name={'X'} callBack={() => props.deleteAffairCallback(props.id)}/>
            </td>
        </tr>
        </tbody>
    )
}