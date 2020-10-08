import { getAuthDataThCr } from "./authReducer"

const INITIAL_APP = 'INITIAL_APP'

const inicialState = {
    inicialised: false
}

export const appReducer = (state = inicialState, action) => {
    switch(action.type){
        case INITIAL_APP: {
            return {
                ...state,
                inicialised: true
            }
        }
        default:{
            return state
        }
    }
}
export const inicialApp = () => ({type: INITIAL_APP})

export const initialisetThCr = () => (dispatch) => {
    let promise = dispatch(getAuthDataThCr())
    Promise.all([promise])
        .then(() => dispatch(inicialApp()))
} 