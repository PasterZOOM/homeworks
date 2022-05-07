import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> =>
    filter === 'all' ? affairs : affairs.filter(t => t.priority === filter)

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> =>
    affairs.filter(t => t._id !== _id)

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            <div>
                {/*<AlternativeAffairs/>*/}
            </div>
            <hr/>
        </div>
    )
}

export default HW2