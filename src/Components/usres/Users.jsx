import React from 'react'
import Avatar from '../../assets/img/UsersPage/avatar.jpg'
import Loading from '../Loading/loading';
import style from './users.module.css'
import { NavLink } from 'react-router-dom';

const UsersBlock = (props) => {
    let users = props.users;
    let pages = []
    for(let i = 1; i<= props.allPages; i++){
        pages.push(i)
    }
    return(
        <div className = {style.users}>
            <div className = {style.pagesBlock}>
                <span className = {style.larr} onClick = {() =>{props.currentPage === 1 ? props.setCurentPage(props.allPages) : props.setCurentPage(props.currentPage - 1)}}>&larr;</span>
                {pages.map(el => (<span key = {el} className = {props.currentPage === el ? style.activePage : style.pages}>{el}</span>))}
                <span className = {style.rarr} onClick = {() =>{props.currentPage ===  props.allPages ? props.setCurentPage(1) : props.setCurentPage(props.currentPage + 1) }}>&rarr;</span>
            </div>
            <div className = {style.usersBlock}>
                {props.loading ? (<div className = {style.loading}><Loading/></div>) : 
                (users.map(el => (
                    <div key = {el.id} className = {style.usersCard}>
                        
                            <NavLink to = {`/profile/${el.id}`} className = {style.avatarLinc}>
                                {el.photos.small === null ? <img src = {Avatar}></img> : <img src= {el.photos.small} alt="avatar"/>}
                            </NavLink>

                        <h3>{el.name}</h3>
                        {el.followed ? 
                            <button className = {style.btn + ' ' + style.follow} 
                                onClick = {() => {props.onfollowUser(el.id)}}>{ 'ONFOLLOW' }
                            </button> :
                            <button className = {style.btn + ' ' + style.onfollow} 
                                onClick = {() => {props.followUser(el.id)}}>{ 'FOLLOW' }
                            </button>                           
                        }
                    </div>
                )))}
            </div>
            
        </div>
    )
}
export default UsersBlock