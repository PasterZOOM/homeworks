import React, {useState} from 'react'
import Affairs from './Affairs'
import {AlternativeAffairs} from './AlternativeAffairs';
import {Button} from './Button';

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
}// need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter(t => t.priority === filter)
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(t => t._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            <div>
                {filteredAffairs.map((a: AffairType) => (
                    <AlternativeAffairs
                        key={a._id}
                        id={a._id}
                        affair={a}
                        deleteAffairCallback={deleteAffairCallback}
                    />
                ))}
                <Button name={'All'} callBack={() => setFilter('all')}/>
                <Button name={'High'} callBack={() => setFilter('high')}/>
                <Button name={'Middle'} callBack={() => setFilter('middle')}/>
                <Button name={'Low'} callBack={() => setFilter('low')}/>
            </div>
            <hr/>
        </div>
    )
}

export default HW2