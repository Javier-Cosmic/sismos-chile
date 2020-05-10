import React from 'react'
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps'

const Maps = ({isMarkerShown, sismo}) => {

    function lat(){
        const lat = parseFloat(sismo.Latitud)
        return lat
    }

    function lng() {
        const lng = parseFloat(sismo.Longitud)
        return lng
    }

    return (
        <>
        <GoogleMap 
            defaultZoom={9}
            defaultCenter={{ lat: lat(), lng: lng()}}
            mapTypeId='hybrid'
        >
            {isMarkerShown && <Marker position={{ lat: lat(), lng: lng() }} />}
        </GoogleMap>
        </>
    )
}

export default withScriptjs(
    withGoogleMap(
        Maps   // --> componente 
    )
)
