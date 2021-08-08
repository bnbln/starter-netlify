import React from 'react'
import ReactMarkdown from 'react-markdown'
import GoogleMapReact from 'google-map-react';

import meta from "../../content/settings/global.yml"

function Map() {
    return(
        <div className="kontakt">
          <h2 className="mymargins" style={{paddingBottom: "1rem"}}>Kontakt</h2>
        <div className="kontakt" style={{
            background: "url()",
            backgroundSize: "cover",
            height: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "center"
        }}>
        <div className="content" style={{
        padding:40,
        background: "white",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        margin: 80
          }}>
            <ReactMarkdown>{meta.contact.info}</ReactMarkdown>
            <ReactMarkdown>{meta.contact.contact}</ReactMarkdown>
            <ReactMarkdown>{meta.contact.open}</ReactMarkdown>
        </div>
          {/* <img src={map} alt=""/> */}
          <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1
          }}>
          <GoogleMapReact
          defaultCenter={{lat: 52.503552, lng: 13.342724}} 
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
          gestureHandling="none"
          zoomControl="false"
          mapTypeId={'satellite'}
        />
        </div>
        </div>
       </div>
    )
}

export default Map;