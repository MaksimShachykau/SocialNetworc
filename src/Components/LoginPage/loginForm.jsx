import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './loginPage.module.css'
class LoginForm extends React.Component {
    render(){
        return(
            <form  className = {style.form} onSubmit = {this.props.handleSubmit}>
                <Field type="text" component = "input" name = "login" placeholder = 'login' className = {style.input}/>
                <Field type="password" component = "input" name = "password" placeholder = 'password' className = {style.input}/>
                <div className = {style.checkboxBlock}>
                    <Field component = "input" name = "rememberMe" type="checkbox"/> <p>Remember Me</p>
                </div>
                <button className = {style.btn}>Login</button>
            </form>
        )
    }
}

export default reduxForm({form: 'loginForm'})(LoginForm)