import React from 'react'
import AuthContainer from '../Auth/AuthBlockContainer'
import style from './loginBlock.module.css'
const LoginBlock = (props) => {
    return(
        <div className = {style.login}>
            <AuthContainer/>        
        </div>
    )
}

export default LoginBlock