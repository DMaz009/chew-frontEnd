import React, { Component } from 'react'
import Nav from './components/Nav'
import RestaurantDetailsPage from './components/RestaurantDetailsPage'
import ReviewsBox from './components/ReviewsBox'
import MyComponent from './components/Map'
import './App.css';


// let baseUrl = "http://opentable.herokuapp.com"
// let baseUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDwOPey_5Xp_w939z6sYtwUYfTxxjNqUwY&callback=InitMap"


class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      center: {
        lat: 41.8781,
        lng: -87.6298
      },
      marker1center: {
        lat: 41.8789,
        lng: -87.6359
      }
    }
  }


  render(){
    return (
      <div className="App">
        <img src="https://i.imgur.com/RpWwxC9.jpg" />
        <Nav />
        <h1 className="title">CHEW</h1>
        <RestaurantDetailsPage />
        <ReviewsBox />
        <MyComponent center={this.state.center} marker1center={this.state.marker1center}/>
      </div>
    )
  }
}




export default App
