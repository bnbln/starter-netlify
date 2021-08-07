import React, { useState, useRef } from "react";
import {Transition, config, animated} from "react-spring"

import truck from "../../public/img/truck.svg"
import home from "../../public/img/home.svg"
import file from "../../public/img/file-text.svg"
 

function Carousel(props) {
    const [active, setActive] = useState(0)
    const item00 = useRef()
    const item01 = useRef()
    const item02 = useRef()
    setTimeout(()=> setActive(active < 2 ? active+1 : 0), 4000)
    var data = props.data
    return(
        <div className="carousel top">
            <div className="text">
                <h2>{data.heading}</h2>
                <p className="lead">{data.description}</p>
                <div className="textslider">
                    <div className={active === 0 ? "item active" : "item"} ref={item00} id="0">
                        <img src={file} alt="" />
                        <h4>Versicherungen</h4>
                    </div>
                    <div className={active === 1 ? "item active" : "item"} ref={item01} id="1">
                        <img src={truck} alt="" />
                        <h4>Verkehrsrecht</h4>
                    </div>
                    <div className={active === 2 ? "item active" : "item"} ref={item02} id="2">
                        <img src={home} alt="" />
                        <h4>Mietrecht</h4>
                    </div>
                </div>
            </div>
            <div className="imagesliderwrapper">
                <div className="imageslider">
                    <Transition
                        items={active}
                        from={{ opacity: 0, translateX: 400 }}
                        enter={{ opacity: 1, translateX: 0 }}
                        leave={{ opacity: 0, translateX: -400 }}
                        reverse={active}
                        delay={250}
                        config={config.default}
                    >
                        {({ opacity, translateX }, item) =>
                        item === 0 ? (
                            <animated.img src={
                                data.blurbs[0].image.childImageSharp ? data.blurbs[0].image.childImageSharp.fluid.src : data.blurbs[0].image
                            } className={active === 0 ? "item active" : "item"} alt=""
                                style={{
                                    opacity: opacity,
                                    transform: translateX.to(y => `translateX(${y}px)`),
                                }}
                            />
                        ) : item === 1 ? (
                            <animated.img src={
                                data.blurbs[1].image.childImageSharp ? data.blurbs[1].image.childImageSharp.fluid.src : data.blurbs[1].image
                            } className={active === 1 ? "item active" : "item"} alt=""
                            style={{
                                opacity: opacity,
                                transform: translateX.to(y => `translateX(${y}px)`),
                            }}
                            />
                        ) : (
                            <animated.img src={
                                data.blurbs[2].image.childImageSharp ? data.blurbs[2].image.childImageSharp.fluid.src : data.blurbs[2].image
                            } className={active === 2 ? "item active" : "item"} alt="" 
                            style={{
                                opacity: opacity,
                                transform: translateX.to(y => `translateX(${y}px)`),
                            }}
                            />
                        )
                        }
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default Carousel