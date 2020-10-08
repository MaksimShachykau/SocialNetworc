import React from 'react'
import News from './news'
import style from './news.module.css'


const NewsBlock = (props) => {
    console.log(props)
    return(
        <div className = {style.newsBlock}>
            {props.news.map(el => <News author = {el.author} 
                                        content = {el.description} 
                                        publishedAt = {el.publishedAt}
                                        id = {el.source.id}
                                        name = {el.source.name}
                                        title = {el.title}
                                        urlToImage = {el.urlToImage}
                                        url = {el.url}
                                        key = {el.id ? el.id : el.title}/>)}
            
        </div>
    )
}
export default NewsBlock