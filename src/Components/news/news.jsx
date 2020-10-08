import React from 'react'
import style from './news.module.css'
/*
author = {el.author} 
                                        content = {el.description} 
                                        publishedAt = {el.publishedAt}
                                        id = {el.source.id}
                                        name = {el.source.name}
                                        title = {el.title}
                                        urlToImage = {el.urlToImage}
                                        url = {el.url}
                                        key = {el.id ? el.id : el.title}
*/
const News = (props) => {
    return(
        <div className = {style.newsItem}>
            <div>
                <img src= {props.urlToImage} alt="urlToImage"/>
            </div>
            <div className = {style.newsItenText}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <a href = {props.url}>{props.name}</a>
            </div>
        </div>
    )
}
export default News