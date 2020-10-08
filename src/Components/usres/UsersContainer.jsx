import React from 'react'
import { connect } from 'react-redux'
import UsersBlock from './Users';
import {getUsers, setAllPages, setNextPage, setLoading , followUser, onfollowUser} from '../../redux/usersReducer'
import {usersAPI} from '../../API/API'
class UsersContainer extends React.Component{
    componentDidMount = () => {
        this.props.setLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.usersInPage)
            .then(response => {
                this.props.setLoading(false)
                this.props.getUsers(response.data.items);
                this.props.setAllPages(Math.ceil(response.data.totalCount / this.props.usersInPage))})
    }
    setCurentPage = (p) => {
        this.props.setNextPage(p)
        this.props.setLoading(true)
        usersAPI.getUsers(p, this.props.usersInPage)
            .then(response => {
                this.props.setLoading(false); 
                this.props.getUsers(response.data.items);})
    }
    followUser = (userId) => {
        usersAPI.followUser(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    this.props.followUser(userId)
                }
            })
    }
    onfollowUser = (userId) => {
        usersAPI.onfollowUser(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    this.props.onfollowUser(userId)
                }
            })
    }

    render(){
        return(
            <UsersBlock users = {this.props.users} 
                        currentPage = {this.props.currentPage} 
                        loading = {this.props.loading} 
                        allPages = {this.props.allPages} 
                        setCurentPage = {this.setCurentPage}
                        followUser = {this.followUser}
                        onfollowUser = {this.onfollowUser}/>
        )
    }
}
let mapStateToProps = (state) => ({
    
        users: state.UsersPage.users,
        currentPage : state.UsersPage.currentPage,
        usersInPage : state.UsersPage.usersInPage,
        allPages : state.UsersPage.allPages,
        loading: state.UsersPage.loading
    
})
let mapDispathToProps = {
    getUsers,
    setAllPages,
    setNextPage,
    setLoading,
    followUser,
    onfollowUser
}
export default connect(mapStateToProps, mapDispathToProps)(UsersContainer)