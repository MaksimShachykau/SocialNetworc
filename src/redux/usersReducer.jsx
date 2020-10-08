let GET_USERS = 'GET_USERS',
    SET_ALL_PAGES = 'SET_ALL_PAGES',
    SET_NEXT_PAGE = 'SET_NEXT_PAGE',
    SET_LOADING = 'SET_LOADING',
    FOLLOW_USERS = 'FOLLOW_USERS',
    ONFOLLOW_USERS = 'ONFOLLOW_USERS'

const inicialState = {
    users : [],
    usersInPage : 30,
    allPages : 0,
    currentPage : 1,
    loading: false
}
const UserReducer = (state = inicialState, action) => {
    
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users: action.users
            }
        case SET_ALL_PAGES:
            return{
                ...state,
                allPages: action.allPages
            }
        case SET_NEXT_PAGE:
            return{
                ...state,
                currentPage: action.NextPage
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.isLoading
            }
        case FOLLOW_USERS:
            return{
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.UserId){
                        return{
                            ...el,
                            followed:true
                        }
                    }
                return el
            })

            }
        case ONFOLLOW_USERS:
            return{
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.UserId){
                        return{
                            ...el,
                            followed:false
                        }
                    }
                    return el
                })

            }
        default:
            return state
        
    }
}

export default UserReducer

export const getUsers = (users) => ({type:GET_USERS, users});
export const setAllPages = (allPages) => ({type:SET_ALL_PAGES, allPages});
export const setNextPage = (NextPage) => ({type:SET_NEXT_PAGE, NextPage});
export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading});
export const followUser = (UserId) => ({type: FOLLOW_USERS, UserId});
export const onfollowUser = (UserId) => ({type: ONFOLLOW_USERS, UserId});