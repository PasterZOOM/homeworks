import React, {ChangeEvent, useState} from 'react'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {RequestsAPI} from './api'

export type RequestPropsType = {}

export const Request: React.FC<RequestPropsType> = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('Сделайте запрос на сервер')

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    const onClickButton = () => {
        RequestsAPI.test(checked)
            .then(response => {
                console.log({...response})
                console.log(response.data.info)
                setStatus(response.data.errorText)
            })
            .catch(Error => {
                console.log({...Error})
                console.warn(Error.response.data.info)
                setStatus('Что-то пошло не так, смотри консоль')
            })
    }

    return (
        <div>
            <SuperCheckbox checked={checked} onChange={onChangeChecked}/>
            <SuperButton onClick={onClickButton}>
                Запрос
            </SuperButton>
            <div>{status}</div>
        </div>
    )
}