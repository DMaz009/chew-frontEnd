import React from 'react'

const Restaurants = (props) => {

let restaurants = props.restaurants


  return (

    <div className="restaurant-list">
  			{ restaurants.map((data) => (
  				<div className="data-preview" key={data.place_id}>
  					<h4>{data.name}</h4>
  					<p>Rating: {data.rating} / 5</p>
            <p>Price Level: {data.price_level} / 5</p>
  				</div>
  			))}
  		</div>

  )
}


export default Restaurants
