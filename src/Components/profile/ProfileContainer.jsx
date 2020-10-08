import React from 'react'
import { connect } from 'react-redux'
import ProfileBlock from './profileBlock'
import {RedirectHOC} from '../../HOC/redirectHOC'
import {setProfileData} from '../../redux/profileReducer'
import Loading from '../Loading/loading'
import {withRouter, Redirect} from 'react-router-dom'

import *as axios from 'axios'
class ProfileContainer extends React.Component{
    componentDidMount = () => { 
        console.log(this.props.myId)
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.myId
        }
        if(userId){
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.setProfileData(response.data)
                })
        }
    } 
    render(){
        if(this.props.isAuth === false){
            return(
                <Redirect to = "/login"/>
            )
        }
        if(!this.props.profileData){
            return(
                <Loading/>
            )
        }
        return(
            <ProfileBlock profileData = {this.props.profileData}/>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profileData: state.profile.profileData,
        myId: state.Auth.id
    }
}
let mapDispatchToProps = {
    setProfileData
}
let ProfileContainerWhithRo = withRouter(ProfileContainer)
 
export default connect(mapStateToProps, mapDispatchToProps)(RedirectHOC(ProfileContainerWhithRo))