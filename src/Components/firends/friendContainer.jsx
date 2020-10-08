import React from 'react'
import { connect } from 'react-redux'
import { RedirectHOC } from '../../HOC/redirectHOC'
import FriendsBlock from './frindsBlock'

let mapStateToProps = (state) => {
    return{}
}
let mapDispatchToProps ={}

let WithRedirectFriends = RedirectHOC(FriendsBlock)

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirectFriends);
export default FriendsContainer