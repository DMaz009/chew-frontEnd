import React, { Component } from 'react'

class Restaurants extends Component {
  constructor(props) {
    super(props)


    this.state = {
      restaurants: props.restaurants,
      baseURL: props.baseURL,
      apiKey: props.apiKey,
      restaurantName: props.restaurantName
    }

  }


  handleClick = (data) => {
    // data.preventDefault()
    this.setState({
      restaurantName: data.name
    })
    console.log(data.name);
  }




  render() {
    return (
      <div className="restaurant-list">
      
    			{ this.props.restaurants.map((data) => (
    				<form onClick={() => this.handleClick(data)} className="data-preview" key={data.place_id}>
    					<h5 className="dataName">{data.name}</h5>
    					<p className="data-rating">Rating: {data.rating} / 5</p>
              <p className="data-priceLevel">Price Level: {data.price_level} / 5</p>
    				</form>
    			)) }

          <div>
          </div>
    	</div>
    )
  }
}


export default Restaurants
