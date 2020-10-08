const SET_NEWS = 'SET_NEWS'

const inicialState = {
    news: null
}

export const newsReducer = (state = inicialState, action) => {
    switch(action.type){
        case SET_NEWS: {
            return{
                ...state,
                news: action.news
            }
        }
        default:{
            return state
        }
    }
}

export const setNews = (news) => ({type: SET_NEWS, news})