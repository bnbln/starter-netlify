import React, {useState} from "react";
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Logo from '../components/Logo'
import Button from '../components/Button'

import meta from "../../content/settings/global.yml"
import menu from "../assets/menu.svg"
import close from "../assets/x.svg"


function Hero(props) {
    const [toggle, setToggle] = useState(false)
    var hero = props.hero
    return(
    <div className={"hero " + props.variant}>
        <div className="layout">
            <div className="grid">
                <header>
                    <Logo meta={meta} />
                    <div className="hamburger">
                        {toggle === false ?
                            <a role="menu" onClick={()=> setToggle(!toggle)}><img src={menu} /></a>
                        :
                            <a role="menu" onClick={()=> setToggle(!toggle)}><img src={close} /></a>
                        }
                    </div>
                    <nav>
                        {meta.menu.map((item, i)=> <Link className="navbar-item" to={item.to} key={"menu-"+i}>{item.name}</Link>)}
                    </nav>
                </header>
            <div className="text">
                <div className="hero primary">
                    {hero.dachzeile ? <ul><li>{hero.dachzeile}</li></ul> : null}
                    {hero.icon ? 
                        hero.icon.extension === "svg" ? 
                        <img src={hero.icon.publicURL} alt="" />
                        : <img src={hero.icon.childImageSharp ? hero.icon.childImageSharp.fluid.src : hero.icon} alt="" />
                    : null }

                    {hero.title ? <h1>{hero.title}</h1> : null}
                    {hero.lead ? <p className="lead">{hero.lead}</p> : null}
                    {hero.cta ? <Button variant="secondary" to={hero.link}>{hero.cta}</Button> : null} 
                    {hero.list ? 
                        <div className="list">
                            {hero.list.map((item, i) => (
                                <Button to={"#"+i} key={"sectionbutton"+i}>{item.title}</Button>
                            ))}
                        </div>
                    : null}
                    {props.children}
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
            : props.imageslider ? props.imageslider : null}
            </div>
        </div>
    </div>
    <div className={toggle === true ? "mobilemenu visible" : "mobilemenu"}>
        <main>
            {meta.menu.map((item, i)=> <Link className="navbar-item" to={item.to} key={"menu-"+i}>{item.name}</Link>)}
            {meta.footermenu.map((item, i)=> <Link className="navbar-item" to={item.to} key={"menu-"+i}>{item.name}</Link>)}
        </main>
    </div>
</div>
    )
}

export default Hero