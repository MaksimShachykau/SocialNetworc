import {authAPI} from '../API/API'

const SET_IS_AUTH = 'SET_IS_AUTH',
      SET_AUTH_DATA = 'SET_AUTH_DATA'

const inicialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const authReduce = (state = inicialState, action) => {
    switch(action.type){
        case SET_AUTH_DATA:{
            return{
                ...state,
                email: action.email,
                id: action.id,
                login: action.login
            }
        }
        case SET_IS_AUTH: 
            return{
                ...state,
                isAuth: action.auth
            }
        default:
            return state
    }
}
export default authReduce;
export const setIsAuth = (auth) => ({type: SET_IS_AUTH, auth})
export const setAuthData = (email, id, login) => ({type: SET_AUTH_DATA, email,id,login}) 

export const getAuthDataThCr = () => (dispatch) => {
    return authAPI.getAuth()
    .then(response => {
        response.data.resultCode === 1 ? dispatch(setIsAuth(false)) : dispatch(setIsAuth(true));
        dispatch(setAuthData(response.data.data.email, response.data.data.id, response.data.data.login))
    })
}

export const loginThCr = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(getAuthDataThCr())
            }
        })
}

export const logOutThCr = () => (dispatch) => {
    authAPI.logOut()
        .then(
            response => {
                if(response.data.resultCode === 0){
                    dispatch(getAuthDataThCr())
                }
            }
        )
} 