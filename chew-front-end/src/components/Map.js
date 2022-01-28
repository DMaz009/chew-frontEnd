import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import SearchLocationInput from './SearchLocationInput'

const containerStyle = {
  width: 'cover',
  height: '600px'
};


function MyComponent(props) {

  let center = props.center
  let marker1center = props.marker1center


  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDOEfq53Kuj1r0EBax94rTqhwGkNk_jE3U"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */
          <div>

            <div>
              <Marker
                defaultPosition={marker1center}
                title="Click to zoom"
                // onClick={props.onMarkerClick}
              />
            </div>



          </div>
        }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
