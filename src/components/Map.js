import React from 'react'

function Map() {
    return(
        <div className="kontakt">
          <h2 className="mymargins" style={{marginBottom: 20}}>Kontakt</h2>
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
            <p>
            <b>Rechtsanwälte in Bürogemeinschaft</b>
            <br/>
            T
            <br/>
            Zivilrecht
            </p>
            <p>
            A
            <br/>
            Fachanwältin für Verkehrsrecht   
            </p>
            <p>
            T
            <br/>
            Fachanwältin für Arbeitsrecht
            </p>
            <p>
            <b>Anschrift</b>
            <br/>
            Ans
            <br/>
            10787
            </p>
            <p>
            <b>Kontaktdaten</b>
            <br/>
            Telefon: 
            <br/>
            Fax:
            <br/>
            Mail: 
            </p>
            <p>
            <b>Sprechzeiten</b>
            <br/>
            Mo-Fr 9:00-12:00 Uhr
            <br/>
            Mo, Di, Do 15:00-18:00 Uhr
            </p>
        </div>
          {/* <img src={map} alt=""/> */}
        </div>
       </div>
    )
}

export default Map;