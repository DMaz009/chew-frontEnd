import React, { Component } from 'react'


let baseUrl = "https://chew-backend.herokuapp.com"

class AllReservations extends Component {
  constructor(props) {
    super(props)


    this.state = {
      reservations: this.props.reservations,
      reservationToBeEdited: this.props.reservationToBeEdited,
      modalOpen: this.props.modalOpen,
      name: this.props.name,
      guests: this.props.guests,
      modalName: "",
      modalGuests: ""
    }
  }


  deleteReservation = (id) => {
    console.log(id)
    fetch(baseUrl + '/chew/' + id, {
      method: 'DELETE',
    }).then(res => {
      console.log(res)
      if(res.status === 200) {
        const findIndex = this.props.reservations.findIndex(reservation => reservation._id === id)
        const copyReservations = [...this.props.reservations]
        copyReservations.splice(findIndex, 1)
        this.setState({
          reservations: copyReservations
        })
        this.props.reservationRefresh()
      }
    })
  }




  showEditForm = (reservation) => {
    console.log(reservation)
    this.setState({
      modalOpen: true,
      name: reservation.name,
      guests: reservation.guests,
      reservationToBeEdited: reservation
    })
  }




  // handleSubmit = (e) => {
  //     e.preventDefault()
  //     fetch(baseUrl + '/chew/' + this.props.reservationToBeEdited._id, {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //         name: e.target.name,
  //         description: e.target.guests
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       credentials: "include"
  //     }).then(res => res.json())
  //     .then(resJson => {
  //       // console.log(resJson);
  //       const findIndex = this.props.reservations.findIndex(reservation => reservation._id === resJson.data._id)
  //       const copyReservations = [...this.props.reservations]
  //       copyReservations[findIndex] = resJson.data
  //       this.setState({
  //         reservations: copyReservations,
  //         modalOpen: false
  //       })
  //     })
  //   }


    handleSubmit = (e) => {
      e.preventDefault()
      console.log(e.target.modalName.value)
      console.log(e.target.modalGuests.value)
      fetch(baseUrl + '/chew/' + this.state.reservationToBeEdited._id, {
        method: 'PUT',
        body: JSON.stringify({
          name: e.target.modalName.value,
          guests: e.target.modalGuests.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json())
      .then(resJson => {
        console.log(resJson)
        const copyReservations = [...this.props.reservations]
        const findIndex = this.state.reservations.findIndex(
          reservation => reservation._id === resJson.data._id)
          copyReservations[findIndex] = resJson.data
          console.log(copyReservations[findIndex])

          this.setState({
            reservations: copyReservations
          })
          this.props.reservationRefresh()
      })
    }





    handleChange = (e) => {
      console.log(e.target.name)
      console.log(e.target.value);
      this.setState({
        [e.target.name]: e.target.value,
        // this.state.name: e.target.value
      })
    }





  render() {
    return (
      <div className="all-reservations">
            <h1>All Reservations</h1>
            <hr/>
            { this.props.reservations.map((data) => (
              <div key={data._id}>
                <label>Name: </label>
                <input type='text' id='name' name='name' value={data.name} onChange={this.handleChange} />

                <label>Guests: </label>
                <input name="guests" value={data.guests}  onChange={this.handleChange}/>
                <br />

                <button onClick={() => this.showEditForm(data)}>Edit</button>
                <button onClick={() => this.deleteReservation(data._id)}>Delete</button>
                <hr/>
              </div>
      			)) }
            {
             this.state.modalOpen &&
             <form onSubmit={this.handleSubmit}>
               <label>Name: </label>
               <input name="modalName" placeholder={this.state.reservationToBeEdited.name}
                 value={this.state.modalName}
                 onChange={this.handleChange} />
               <label>Guests: </label>
               <input name="modalGuests" placeholder={this.state.reservationToBeEdited.guests}
                 value={this.state.modalGuests}
                 onChange={this.handleChange} />

               <input type="submit" value="Submit"/>
             </form>
           }
    	</div>
    )
  }
}


export default AllReservations
