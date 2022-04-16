import React, {ChangeEvent, KeyboardEvent} from 'react'
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
    const inputClass = error ? s.error : s.someClass// need to fix with (?:)


    return (
        <div className={s.body}>
            <div className={s.inputError}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPress}
                    className={inputClass}
                    onBlur={setNameCallback}
                />
                <div className={s.textError}>{error}</div>
            </div>
            <div className={s.buttonCounter}>
                <button onClick={addUser} disabled={!!error || !name} className={s.buttonAdd}>Add</button>
                <span className={s.counter}>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
