import React, { Component } from 'react'

let baseUrl = process.env.REACT_APP_BASEURL

export default class ReservationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      reservations: [],
      guests: '',
      restaurant: '',
      location: '',
      date: '',
      time: '',
      availability: '',
      reservationToBeEdited: {},
      modalOpen: false

    }
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

  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value,
      guests: event.target.value
    })
  }

  render() {
    console.log(this.state.name)
    return (
      <form onSubmit={this.handleSubmit}>
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
