import React, {useState} from "react";
import { Link } from 'gatsby'
import Logo from '../components/Logo'
import Button from '../components/Button'
import meta from "../../content/settings/global.yml"
import menu from "../assets/menu.svg"
import close from "../assets/x.svg"


function Hero(props) {
    const [toggle, setToggle] = useState(false)
    const setMenu = props.menu
    setMenu(toggle)
    var hero = props.hero
    console.log(props);
    return(
    <div className={ "hero" + " " + props.variant }>
        <div className="layout">
            <div className="grid">
                <header>
                    <Logo meta={meta} />
                    {props.isPreview ? null :
                    <>
                        <div className="hamburger">
                            {toggle === false ?
                            <button onClick={()=> setToggle(!toggle)} role="menu">
                                <img src={menu} alt="open menu" />
                            </button>
                            :
                            <button onClick={()=> setToggle(!toggle)} role="menu">
                                <img src={close} alt="close menu" />
                            </button>
                            }
                        </div>
                        <nav>
                            {meta.menu.map((item, i)=> <Link className="navbar-item" activeClassName="active" to={item.to} onClick={()=> setToggle(!toggle)} key={"menu-"+i}>{item.name}</Link>)}
                        </nav>
                    </>
                    }
                </header>
            <div className="text">
                <div className="hero">
                    {hero.dachzeile ? <ul><li>{hero.dachzeile}</li></ul> : null}
                    {hero.icon ? 
                        hero.icon.extension === "svg" ? 
                        <img className="icon" src={hero.icon.publicURL} alt="" />
                        : <img className="icon" src={hero.icon.childImageSharp ? hero.icon.childImageSharp.fluid.src : hero.icon} alt="" />
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
                { hero.image ? 
                    <div className="imageWrapper" style={{
                        width: "100%",
                        height: "100%",
                        background: "url("+(hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image)+") center center",
                        backgroundSize: "cover"
                    }}>
                    </div>
                : props.imageslider ? props.imageslider : null}

            </div>
        </div>
    </div>
    <div className={toggle === true ? "mobilemenu visible" : "mobilemenu"}>
        <main>
            {meta.menu.map((item, i)=> <Link className="navbar-item" activeClassName="active" to={item.to} key={"menu-"+i}>{item.name}</Link>)}
            {meta.footermenu.map((item, i)=> <Link className="navbar-item" activeClassName="active" to={item.to} key={"menu-"+i}>{item.name}</Link>)}
        </main>
    </div>
</div>
    )
}

export default Hero