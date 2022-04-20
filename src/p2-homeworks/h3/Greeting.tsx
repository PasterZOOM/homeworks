import React, {ChangeEvent, KeyboardEvent} from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyPress, error, totalUsers} // деструктуризация пропсов
) => {

    return (
        <div className={s.body}>
            <div className={s.inputError}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPress}
                    error={error}
                    onBlur={setNameCallback}
                />
            </div>
            <div className={s.buttonCounter}>
                <SuperButton onClick={addUser} disabled={!!error || !name}>Add</SuperButton>
                <span className={s.counter}>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
