import React from 'react'
import { connect } from 'react-redux'
import statusForm from './statusForm'

class Status extends React.Component {
    render(){
        return(
            <statusForm/>
        )
    }
}

let mapStateToProps = (state) => {
    return{}
}
let mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Status)