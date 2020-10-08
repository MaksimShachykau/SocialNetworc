import React from 'react';
import LoginBlock from '../loginblock/loginBlock';
import style from './header.module.css'
const Header = () => {
    return(
        <header className = {style.header}>
            <div className={style.logo}>
                <h1>Social Network</h1>
            </div>
            <LoginBlock/>
        </header>
    )
}
export default Header