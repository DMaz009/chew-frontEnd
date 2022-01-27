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




  render(){
    return (


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
