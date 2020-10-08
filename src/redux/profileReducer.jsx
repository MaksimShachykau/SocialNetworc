
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

let inicialState = {
    profileData : null
}

export const profileReducer = (state = inicialState, action) => {
    switch (action.type){
        case SET_PROFILE_DATA:{
            
            return{
                ...state,
                profileData: action.data
            }
        }
        default:{
            return state
        }
    }
}

export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data})