import React from 'react'
import { NavLink } from 'react-router-dom';

import style from './navBlock.module.css'
const NavBlock = () => {
    return(
        <nav className = {style.navBlock}>
            <NavLink to ='/profile' className = {style.NavPoint} activeClassName = {style.activeNav}>My Profile</NavLink>
            <NavLink to ='/friends' className = {style.NavPoint} activeClassName = {style.activeNav}>Friends</NavLink>
            <NavLink to ='/dialogs' className = {style.NavPoint} activeClassName = {style.activeNav}>Dialogs</NavLink>
            <NavLink to ='/users' className = {style.NavPoint} activeClassName = {style.activeNav}>Users</NavLink>
            <NavLink to ='/news' className = {style.NavPoint} activeClassName = {style.activeNav}>News</NavLink>
            <NavLink to ='/seting' className = {style.NavPoint} activeClassName = {style.activeNav}>Setting</NavLink>
        </nav>
    )
}
export default NavBlock