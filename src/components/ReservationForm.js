import React, { Component } from 'react'

let baseUrl = "http://localhost:3000"
//remove this comment

export default class ReservationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      reservations: [''],
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
    fetch(baseUrl + '/chew', {
      credentials: 'include'
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      this.setState({reservations: data})
    })
  }

  addReservation = (newReservation) => {
    const copyReservations = [...this.state.reservations]
    copyReservations.push(newReservation)
    console.log(copyReservations);
    this.setState({
      reservations: copyReservations
    })
  }

  updateReservation = (reservation) => {
    console.log(reservation)
    fetch(baseUrl + '/chew/' + reservation._id, {
      method: 'PUT',
      body: JSON.stringify({updated: !reservation.updated}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      const copyReservations = [...this.state.holidays]
      const findIndex = this.state.reservations.findIndex(
        reservation => reservation._id === resJson.data._id)
        copyReservations[findIndex].updated = resJson.data.updated
        console.log(copyReservations[findIndex])

        this.setState({
          reservations: copyReservations
        })
    })
  }

  deleteReservation = (id) => {
    console.log(id)
    fetch(baseUrl + '/holidays/' + id, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => {
      console.log(res)
      if(res.status === 200) {
        const findIndex = this.state.reservations.findIndex(
          reservation => reservation._id === id)
        const copyReservations = [...this.state.reservations]
        copyReservations.splice(findIndex, 1)
        this.setState({
          reservations: copyReservations
        })
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
    fetch(baseUrl + '/chew', {
      method: 'POST',
      body: JSON.stringify( {
        name: this.state.name,
        guests: this.state.guests}),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => { console.log(res); return res.text()} )
    .then(data => {
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
    // console.log(this.state.name)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1></h1>
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
