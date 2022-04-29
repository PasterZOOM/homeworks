import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from './Pages';

function Header() {
    return (
        <div>

            <NavLink to={PATH.PRE_JUNIOR} >PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} >Junior</NavLink>
            <NavLink to={PATH['JUNIOR+']} >Junior+</NavLink>
        </div>
    )
}

export default Header
