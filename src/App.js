import React, { Component } from 'react'
import Nav from './components/Nav'
import RestaurantDetailsPage from './components/RestaurantDetailsPage'
import ReviewsBox from './components/ReviewsBox'
import MyComponent from './components/Map'
import Restaurants from './components/RestaurantsList'
import ReservationForm from './components/ReservationForm'
import './App.css';
import './main.scss'


// let baseUrl = "http://opentable.herokuapp.com"
// let baseUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDwOPey_5Xp_w939z6sYtwUYfTxxjNqUwY&callback=InitMap"




class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      restaurantsArray: [],
      center: {
        lat: 41.8781,
        lng: -87.6298
      },
      marker1center: {
        lat: 41.8789,
        lng: -87.6359
      },
      baseURL: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=asian&',
      apiKey: 'key=AIzaSyDOEfq53Kuj1r0EBax94rTqhwGkNk_jE3U',
      searchURL: ''
      // baseURL: 'https://api.documenu.com/v2/restaurants/search/geo?',
      // lat: 'lat=',
      // latCordinates: 41.8789,
      // andSign: '&',
      // lon: 'lon=',
      // lonCordinates: -87.6359,
      // distance: '&distance=1',
      // cuisine: '&cuisine=Asian&',
      // apiKey: 'key=kb7a36fd71c5dcb1eadc5f9b365af20a6',
      // searchURL: ''
    }
  }


// "https://www.google.com/maps/embed/v1/place?key=AIzaSyDOEfq53Kuj1r0EBax94rTqhwGkNk_jE3U&q=Eiffel+Tower,Paris+France"


// note


  // FUNCTIONS

  getRestaurants = () => {
    this.setState({
      searchURL: this.state.baseURL + this.state.apiKey
    }, () => {
      fetch(this.state.searchURL)
      .then(response => {return response.json()})
      .then(json => this.setState({
        restaurants: json.results,
      }),
      (err) => console.log(err))
    })
  }


  // getRestaurants = () => {
  //   fetch(this.state.baseUrl + this.state.apiKey, {
  //     credentials: "include"
  //   })
  //   .then(res => {
  //     if (res.status === 200) {
  //       return res.json()
  //     } else {
  //       return []
  //     }
  //   }).then(data => {
  //     console.log(data)
  //     this.setState({restaurants: data})
  //   })
  // }



  componentDidMount(){
    this.getRestaurants()
  }


  render(){
    return (
      <div className="App wrapper">
      <Nav />

    <section className='hero'>
      <img className='hero-img' src='https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'/>
      <h1 className="hero-title">CHEW</h1>
      <p className='hero-subhead'>
        Check out Asian Restarants below!
      </p>

      <svg className='hero-svg' width="24" height="58" viewBox="0 0 24 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9393 57.0607C11.5251 57.6464 12.4749 57.6464 13.0607 57.0607L22.6066 47.5147C23.1924 46.9289 23.1924 45.9792 22.6066 45.3934C22.0208 44.8076 21.0711 44.8076 20.4853 45.3934L12 53.8787L3.51472 45.3934C2.92893 44.8076 1.97918 44.8076 1.3934 45.3934C0.807612 45.9792 0.807612 46.9289 1.3934 47.5147L10.9393 57.0607ZM10.5 0L10.5 56H13.5L13.5 0L10.5 0Z" fill="white"/>
      </svg>

      <div>
        {this.state.restaurants && <Restaurants restaurants={this.state.restaurants} /> }
      </div>

      </section>

      <section className='map' id='map'>
        <MyComponent center={this.state.center} marker1center={this.state.marker1center}/>
      </section>

      <div className='details' id='restaurant'>
      <h1>Restaurant Name</h1>
      <hr/>
      <RestaurantDetailsPage />
      </div>


      <section className='more-info'>
      <h1>Menu Items:</h1>
      <hr/>
      <div className='glass'>

        <div className='feature '>

          <div className='content'>
            <p className='title'>Orange Chicken</p>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum. Consectetur purus ut faucibus pulvinar elementum integer enim.</p>
          </div>
          <img src='https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' alt='Food Photo'/>
        </div>

        <div className='feature left-menu'>
          <div className='content'>
            <p className='title'>Sweet Fire Chicken </p>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum. Consectetur purus ut faucibus pulvinar elementum integer enim.</p>
          </div>
          <img src='https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' alt='Food Photo'/>
        </div>

        <div className='feature '>
          <div className='content'>
            <p className='title'>Beef & Brocolli</p>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum. Consectetur purus ut faucibus pulvinar elementum integer enim.</p>
          </div>
          <img src='https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' alt='Food Photo'/>
        </div>
        </div>
      </section>

    <div className='reviews' id='reservation'>

    <ReservationForm className="reviews" restaurant={this.state.restaurants} />
    </div>
    </div>
      )
    }
  }





export default App
