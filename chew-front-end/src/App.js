import React, { Component } from 'react'
import Nav from './components/Nav'
import RestaurantDetailsPage from './components/RestaurantDetailsPage'
import ReviewsBox from './components/ReviewsBox'
import './App.css';


// let baseUrl = "http://opentable.herokuapp.com"
// let baseUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDwOPey_5Xp_w939z6sYtwUYfTxxjNqUwY&callback=InitMap"


class App extends Component{
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <div className="App">
        <img src="https://i.imgur.com/RpWwxC9.jpg" />
        <Nav />
        <h1 className="title">CHEW</h1>
        <RestaurantDetailsPage />
        <ReviewsBox />
      </div>
    )
  }
}



export default App;
