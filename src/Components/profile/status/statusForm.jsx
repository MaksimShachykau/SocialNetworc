import React from 'react'
import { Field, reduxForm } from 'redux-form'

const StatusForm = (props) => {
    return(
        <form>
            <Field/>
        </form>
    )
}

export default reduxForm({form: 'statusForm'})(StatusForm)