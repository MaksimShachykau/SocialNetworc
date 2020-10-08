import React from 'react'
import { connect } from 'react-redux'
import DialogsBlock from './dialogs'
import {RedirectHOC} from '../../HOC/redirectHOC'
class DialogsCondainer extends React.Component{
    render(){
        return (
            <DialogsBlock/>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        isAuth: state.Auth.isAuth
    }
}
const mapDispatchToProps = {

}
let WithRedirectDialogsContainer = RedirectHOC(DialogsCondainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithRedirectDialogsContainer)