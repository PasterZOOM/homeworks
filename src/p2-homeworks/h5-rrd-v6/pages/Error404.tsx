import React from 'react'
import style from './Error404.module.css'
import image from './error.png'

function Error404() {

    return (
        <div className={style.onStyle}>
            <img src={image} alt="Ошибка 404"/>
        </div>
    )
}

export default Error404
