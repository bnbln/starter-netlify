import React from "react";
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Logo from '../components/Logo'
import Button from '../components/Button'

function Hero(props) {
    var hero = props.hero
    console.log(hero);
    return(
    <div className={"hero " + props.variant}>
        <div className="layout">
            <div className="grid">
                <header>
                    <Logo />
                    <nav>
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/recht">Rechtsfragen</Link>
                    <Link className="navbar-item" to="/about">Anwalt</Link>
                    <Link className="navbar-item" to="/blog">Aktuelles</Link>
                    <Link className="navbar-item" to="/contact">Kontakt</Link>
                    </nav>
                </header>
            <div className="text">
                <div className="hero primary">
                    {hero.dachzeile ? <ul><li>{hero.dachzeile}</li></ul> : null}
                    {hero.title ? <h1>{hero.title}</h1> : null}
                    {hero.lead ? <p className="lead">{hero.lead}</p> : null}
                    {hero.cta ? <Button variant="secondary" to="/about">{hero.cta}</Button> : null} 
                </div>
            </div>
            <div className="image" style={{position: "relative"}}>
                {hero.image ?
                <BackgroundImage
                Tag="div"
                fluid={!!hero.image.childImageSharp ? hero.image.childImageSharp.fluid : hero.image}
                backgroundColor={`#040e18`}
                style={{
                    width: "100%", height: "100%"
                }}
                > 
            </BackgroundImage>
            :null}
            </div>
        </div>
    </div>
</div>
    )
}

export default Hero