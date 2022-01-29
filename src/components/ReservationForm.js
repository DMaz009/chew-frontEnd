import React, { Component } from 'react'

let baseUrl = process.env.REACT_APP_BASEURL

export default class ReservationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      reservations: [],
      guests: '',
      restaurants: props.restaurants,
      location: '',
      date: '',
      time: '',
      availability: '',
      reservationToBeEdited: {},
      modalOpen: false

    }
  }

  getReservations = () => {
    fetch(basUrl + '/chew', {
      credentials: 'include'
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      this.setState( reservations: data)
    })
  }

  addReservation = (newReservation) => {
    const copyReservations = [...this.state.reservations]
    copyReservations.push(newReservation)
    this.setState({
      reservations: copyReservations
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(baseUrl + '/chew', {
      method: 'POST',
      body: JSON.stringify( {
        name: this.state.name.value,
        guests: this.state.guests.value}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data);
    })

  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state.name)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> {this.props.restaurants} </h1>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' name='name'
          onChange={ (event) => this.handleChange(event)}
          value={this.state.name}
          />
          <label htmlFor='guests'>Guests: </label>
          <input type='number' id='guests' name='guests'
            onChange={ (event) => this.handleChange(event)}
            value={this.state.guests}
            />

          <input type='submit' value='Add Reservation' />
      </form>
    )

  }

}
