import React from 'react'
import { connect } from 'react-redux'
import { newsApi } from '../../API/API'
import NewsBlock from './newsBlock'
import {setNews} from '../../redux/newsReducer'
import Loading from '../Loading/loading'

class NewsBlockContainer extends React.Component {
    componentDidMount = () => {
        newsApi.getNewsTechCrunch()
            .then(response => this.props.setNews(response.data.articles))
    }
    render(){
        if(!this.props.news){
            return(
                <Loading/>
            )
        }
        return(
            <NewsBlock news = {this.props.news}/>
        )
    }
} 
let mapStateToProps = (state) => {
    return{
        news: state.news.news
    }
}
let mapDispatchToProps = {
    setNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsBlockContainer)