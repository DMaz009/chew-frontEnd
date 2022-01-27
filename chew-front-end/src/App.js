import React, { Component } from 'react'
import Nav from './components/Nav'
import RestaurantDetailsPage from './components/RestaurantDetailsPage'
import ReviewsBox from './components/ReviewsBox'
import MyComponent from './components/Map'
import './App.css';
import './main.scss'


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
      <>
      <div className="App wrapper">
      <Nav />

    <section className='hero'>
      <h1 className="hero-title">CHEW</h1>
      <p className='hero-subhead'>
        Check out Asian Restarants below!
      </p>
      <svg className='hero-svg' width="24" height="58" viewBox="0 0 24 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9393 57.0607C11.5251 57.6464 12.4749 57.6464 13.0607 57.0607L22.6066 47.5147C23.1924 46.9289 23.1924 45.9792 22.6066 45.3934C22.0208 44.8076 21.0711 44.8076 20.4853 45.3934L12 53.8787L3.51472 45.3934C2.92893 44.8076 1.97918 44.8076 1.3934 45.3934C0.807612 45.9792 0.807612 46.9289 1.3934 47.5147L10.9393 57.0607ZM10.5 0L10.5 56H13.5L13.5 0L10.5 0Z" fill="white"/>
      </svg>
      </section>

      <section className='map'>
        <MyComponent />
      </section>

      <div className='details'>
      <RestaurantDetailsPage />
      </div>


      <section className='more-info'>
        <div className='feature '>
          <div className='content'>
            <p className='title'>Orange Chicken</p>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum. Consectetur purus ut faucibus pulvinar elementum integer enim.</p>
          </div>
          <img src='https://images.unsplash.com/photo-1516684902511-1e07238471ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA0fHxhc2lhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt='Food Photo'/>
        </div>

        <div className='feature left-menu'>
          <div className='content'>
            <p className='title'>Sweet Fire Chicken </p>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum. Consectetur purus ut faucibus pulvinar elementum integer enim.</p>
          </div>
          <img src='https://images.unsplash.com/photo-1516684902511-1e07238471ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA0fHxhc2lhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt='Food Photo'/>
        </div>

        <div className='feature '>
          <div className='content'>
            <p className='title'>Beef & Brocolli</p>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum. Consectetur purus ut faucibus pulvinar elementum integer enim.</p>
          </div>
          <img src='https://images.unsplash.com/photo-1516684902511-1e07238471ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA0fHxhc2lhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt='Food Photo'/>
        </div>
      </section>


    <div className='reviews'>
      <ReviewsBox />
    </div>
    </div>
    </>
      )
    }
  }





export default App
