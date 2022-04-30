import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages';
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.nav}>
            <input type="checkbox" id="hmt" className={style.hiddenMT}/>
                <div className={style.hiddenM}>
                    <NavLink to={PATH.PRE_JUNIOR} className = {({isActive}) => isActive ? style.active : style.item}> PreJunior </NavLink>
                    <NavLink to={PATH.JUNIOR} className = {({isActive}) => isActive ? style.active : style.item}> Junior </NavLink>
                    <NavLink to={PATH['JUNIOR+']} className = {({isActive}) => isActive ? style.active : style.item}> Junior+ </NavLink>
                </div>
            <label className={style.btnM} htmlFor="hmt"/>
        </div>
    )
}

export default Header
