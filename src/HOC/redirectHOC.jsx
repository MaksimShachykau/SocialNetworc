import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
let mapStateToProps = (state) => {
    return{
        isAuth: state.Auth.isAuth
    }
}
export const RedirectHOC = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isAuth){
            return(
                <Redirect to = {'/login'}/>
            )
        }
        return(
            <Component {...props}/>
        )

    }
    return(
        connect(mapStateToProps)(RedirectComponent)
    )
}