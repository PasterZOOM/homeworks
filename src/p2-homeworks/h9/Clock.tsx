import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        date.setHours(date.getHours())
        date.setMinutes(date.getMinutes())
        date.setSeconds(date.getSeconds())
        setTimeout(() => {
            clearInterval(timerId)
        })
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            date.setSeconds(date.getSeconds() + 1)
            let copy = new Date()
            copy.setTime(date.getTime())
            setDate(copy)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`// fix with date
    const stringDate = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
