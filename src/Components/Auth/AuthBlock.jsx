import React from 'react'
import style from './AuthBlock.module.css'
const AuthBlock = (props) =>{
    
    return(
        <div>
            {props.isAuth ? (<div className = {style.loginBl}><p>{props.login}</p> <button onClick = {props.logOutThCr}>LogOut</button></div>) : (<p>LOGIN</p>)}
        </div>
    )
}

export default AuthBlock 