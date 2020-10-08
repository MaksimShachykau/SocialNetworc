import React from 'react'
import { connect } from 'react-redux'
import AuthBlock from './AuthBlock'
import {setIsAuth, setAuthData, getAuthDataThCr, logOutThCr} from '../../redux/authReducer'
class AuthContainer extends React.Component{
    componentDidMount = () => {
        this.props.getAuthDataThCr();
    } 
    render(){
        
        return(
            
            <AuthBlock login = {this.props.login} isAuth = {this.props.isAuth} logOutThCr = {this.props.logOutThCr}/>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}
let mapDispatchToProps = {
    setIsAuth,
    setAuthData,
    getAuthDataThCr,
    logOutThCr
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer) 