import React, {useState} from "react";
import {Spring, config, animated, useSpring} from "react-spring"
import metadatafromyml from "../../content/settings/global.yml";

const Intro = (props) => {
  const styles = useSpring({
    to: [
      { opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" },
      { opacity: 1, filter: "blur(0px)", transform: "translateY("+window.innerHeight+"px)" },
      { opacity: 0}
    ],
    from: { opacity: 1, filter: "blur(50px)", transform: "translateY(0px)" },
    config: config.molasses
  })
  return (
    <animated.div className="intro" style={styles}>
      <animated.h1 >{metadatafromyml.site}</animated.h1>
    </animated.div>
  )
}

export default Intro