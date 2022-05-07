import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs({data, setFilter, deleteAffairCallback, filter}: AffairsPropsType) {
    const mappedAffairs = data.map((a: AffairType) =>
        <Affair key={a._id}
                id={a._id}
                affair={a}
                deleteAffairCallback={deleteAffairCallback}
        />
    )

    const setAll = () => setFilter('all')
    const setHigh = () => setFilter('high')
    const setMiddle = () => setFilter('middle')
    const setLow = () => setFilter('low')

    const buttonAllClassName = filter === 'all' ? s.activeFilter : ''
    const buttonHighClassName = filter === 'high' ? s.activeFilter : ''
    const buttonMiddleClassName = filter === 'middle' ? s.activeFilter : ''
    const buttonLowClassName = filter === 'low' ? s.activeFilter : ''

    return (
        <div className={s.body}>
            <div className={s.mappedAffairs}>
                {mappedAffairs}
            </div>
            <div className={s.filterButtons}>
                <SuperButton onClick={setAll} className={buttonAllClassName}>All</SuperButton>
                <SuperButton onClick={setHigh} className={buttonHighClassName}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={buttonMiddleClassName}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={buttonLowClassName}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs