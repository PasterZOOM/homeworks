import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}// кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.body}>
            <div className={s.mappedAffairs}>
                {mappedAffairs}
            </div>
            <div className={s.filterButtons}>
                <SuperButton onClick={setAll}
                             className={props.filter === 'all' ? s.activeFilter : ''}>All</SuperButton>
                <SuperButton onClick={setHigh}
                             className={props.filter === 'high' ? s.activeFilter : ''}>High</SuperButton>
                <SuperButton onClick={setMiddle}
                             className={props.filter === 'middle' ? s.activeFilter : ''}>Middle</SuperButton>
                <SuperButton onClick={setLow}
                             className={props.filter === 'low' ? s.activeFilter : ''}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs