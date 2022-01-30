import React, { Component } from 'react'


let baseUrl = "http://localhost:3000"

class AllReservations extends Component {
  constructor(props) {
    super(props)


    this.state = {
      reservations: props.reservations
    }
  }


  deleteReservation = (id) => {
    console.log(id)
    fetch(baseUrl + '/chew/' + id, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => {
      console.log(res)
      if(res.status === 200) {
        const findIndex = this.props.reservations.findIndex(reservation => reservation._id === id)
        const copyReservations = [...this.props.reservations]
        copyReservations.splice(findIndex, 1)
        this.setState({
          reservations: copyReservations
        })
      }
    })
  }





  render() {
    return (
      <div className="all-reservations">
            <h1>All Reservations</h1>
            <hr/>
            { this.props.reservations.map((data) => (
              <div key={data._id}>
                <h4 className="reservation-name">Name: {data.name}</h4>
                <h4 className="reservation-guests">Guests: {data.guests}</h4>
                <button>Edit</button>
                <button onClick={() => this.deleteReservation(data._id)}>Delete</button>
                <hr/>
              </div>
      			)) }

    	</div>
    )
  }
}


export default AllReservations
