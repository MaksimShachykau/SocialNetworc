import React from 'react'
import style from './profile.module.css'
import Avatar from '../../assets/img/UsersPage/avatar.jpg'

const ProfoleBlock = (props) => {
    console.log(props.profileData)
    let profileData = props.profileData
    let contscts = []
    if(profileData){
        for(let el in profileData.contacts){
            contscts.push(
                <div className = {style.contactsInfoItems}>
                    <p key = {el}>{el}:</p> {profileData.contacts[el] ? <a className = {style.contactLinc} href = {profileData.contacts[el]}>{profileData.contacts[el]}</a> : <span>not set</span>}
                </div>
            )
        }
    }
    console.log(contscts)
        return(
            <div className = {style.profileInfo}>
                <div className = {style.avaBlock}>
                    {profileData.photos.large === null ? <img className = {style.avatar + ' ' + style.defaultAvatar } src = {Avatar}></img> : <img className = {style.avatar} src= {profileData.photos.large} alt="avatar"/>}
                    <div className = {style.aboutMe}>
                        <p>About Me:</p><span>{profileData.aboutMe}</span>
                    </div>
                </div>
                <div className = {style.profileBlockInfo}>
                    <div className = {style.NameStatus}>
                        <h2 className = {style.name}>{profileData.fullName}</h2>
                        status
                    </div>
                    <div className = {style.ContactsJobsInfo}>
                        <div className = {style.jobsInfo}>
                            <h4 className = {style.headerInfo}>Looking for a job</h4>
                            <div className = {style.jobInfo}>
                                {profileData.lookingForAJob ? <span>I'm looking for a job</span> : <span>I'm not looking for a job</span>}
                            </div>
                            <div className = {style.jobInfo}>
                                <p>Looking for a job description: </p> <span>{profileData.lookingForAJobDescription}</span>
                            </div>
                        </div>
                        <div className = {style.contactsInfo}>
                            <h4 className = {style.headerInfo}>Contacts</h4>
                            {contscts}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default ProfoleBlock