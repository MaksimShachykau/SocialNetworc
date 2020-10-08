import React from 'react'
import style from './loginPage.module.css'
import SocialNetworkImg from '../../assets/img/loginPage/socialNetworc.jpg'
import { connect } from 'react-redux'
import LoginForm from './loginForm'
import {loginThCr} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'

const LoginPage = (props) => {
    let onSubmit = (formData) => {
        props.loginThCr(formData.login, formData.password, formData.rememberMe)
    }
    if(props.isAuth === true){
        return(
            <Redirect to = "/profile"/>
        )
    }
    return(
        <div className = {style.loginPage}>
            <div className = {style.imgBlock}>
                <img src = {SocialNetworkImg} alt="SocialNetworkImg"/>
            </div>
            <div className = {style.formBlock}>
                <h3>LOGIN</h3>
                <LoginForm onSubmit = {onSubmit}/>
            </div>
        </div>       
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}
let mapDispatchToProps = {
    loginThCr
}
export default  connect(mapStateToProps, mapDispatchToProps)(LoginPage)