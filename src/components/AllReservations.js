import React, { Component } from 'react'


let baseUrl = "https://chew-backend.herokuapp.com"

class AllReservations extends Component {
  constructor(props) {
    super(props)


    this.state = {
      reservations: props.reservations,
      reservationToBeEdited: props.reservationToBeEdited,
      modalOpen: props.modalOpen,
      name: props.name,
      guests: props.guests,
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


    handleSubmit = (e, reservation) => {
      e.preventDefault()
      console.log(reservation)
      fetch(baseUrl + '/chew/' + reservation._id, {
        method: 'PUT',
        body: JSON.stringify({updated: !reservation.updated}),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json())
      .then(resJson => {
        console.log(resJson)
        const copyReservations = [...this.props.reservations]
        const findIndex = this.state.reservations.findIndex(
          reservation => reservation._id === resJson.data._id)
          copyReservations[findIndex].updated = resJson.data.updated
          console.log(copyReservations[findIndex])

          this.setState({
            reservations: copyReservations
          })
          this.props.reservationRefresh()
      })
    }





    handleChange = (e) => {
      console.log(e.target.name)
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
               <input name="modalName" value={this.state.reservationToBeEdited.name}
                 onChange={this.handleChange} />
               <label>Name: </label>
               <input name="modalGuests" value={this.state.reservationToBeEdited.guests}
                 onChange={this.handleChange} />

               <input type="submit" value="Submit"/>
             </form>
           }
    	</div>
    )
  }
}


export default AllReservations
