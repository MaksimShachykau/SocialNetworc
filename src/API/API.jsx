import *as axios from 'axios';

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{'API-KEY': 'c04a6b20-2980-47da-9776-18429c0b4a30'}
})

const instanceAxiosNews = axios.create({
    baseURL: `http://newsapi.org/v2/`,
    headers:{'X-Api-Key': '86c92c990d9b4cafb0597bb81d895d33'}
})
//https://newsapi.org/v2/top-headlines?country=us&apiKey=86c92c990d9b4cafb0597bb81d895d33
export const newsApi = {
    getNewsTechCrunch: () => {
        return(
            instanceAxiosNews.get('top-headlines?country=us&apiKey=86c92c990d9b4cafb0597bb81d895d33')
        )
    }
}

export const authAPI = {
    getAuth: () => {
        return(
            instanceAxios.get('auth/me')
        )
    },
    login: (email, password, rememberMe = false) => {
        return(
            instanceAxios.post('/auth/login', {email:email, password: password, rememberMe: rememberMe})
        )
    },
    logOut: () => {
        return(
            instanceAxios.delete('/auth/login')
        )
    }
    
}
export const usersAPI = {
    getUsers: (currentPage, usersInPage) => {
        return(
            instanceAxios.get(`users?page=${currentPage}&count=${usersInPage}`)
        )
    },
    followUser: (userId) => {
        return(
            instanceAxios.post(`follow/${userId}`)
        )
    },
    onfollowUser: (userId) => {
        return(
            instanceAxios.delete(`follow/${userId}`)
        )
    }
}

