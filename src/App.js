import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import FriendsContainer from './Components/firends/friendContainer';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import NavBlock from './Components/navBlock/navBlock'
import NewsBlockContainer from './Components/news/newsBlockContainer';
import ProfileContainer from './Components/profile/ProfileContainer';
import SettingBlock from './Components/setting/settingBlock';
import UsersContainer from './Components/usres/UsersContainer';
import DialogsCondainer from './Components/dialogs/dialogsContainer';
import LoginPage from './Components/LoginPage/loginPage';
import { connect } from 'react-redux';
import {initialisetThCr} from './redux/appReducer'
import Loading from './Components/Loading/loading';
class App extends React.Component {
  componentDidMount = () => {
    this.props.initialisetThCr()
  }
  render(){
    if(!this.props.inicialised){
      return(
        <Loading/>
      )
    }
    return (
      <BrowserRouter>
          <Header/> 
          <div className = 'app-wrapper'>
            <NavBlock/>
            <div className="app-wrapper-content">
              <Route path = '/profile/:userId?' render = {() => <ProfileContainer/>}/>
              <Route path = '/friends' render = {() => <FriendsContainer/>}/>
              <Route path = '/news' render = {() => <NewsBlockContainer/>}/>
              <Route path = '/seting' render = {() => <SettingBlock/>}/>
              <Route path = '/users' render = {() => <UsersContainer/>}/>
              <Route path = '/dialogs' render = {() => <DialogsCondainer/>}/>
              <Route path = '/login' render = {()=> <LoginPage/>}/>
            </div>  
          </div>
          <Footer/>
      </BrowserRouter>
    );
  }
}
let mapStateToProps = (state) => {
  return{
    inicialised:state.app.inicialised
  }
}
let mapDispathToProps = {
  initialisetThCr
}

export default connect(mapStateToProps, mapDispathToProps)(App);
