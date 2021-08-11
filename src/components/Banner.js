import React from 'react'

function Banner(props) {
  return <div className={"banner" + " nr" + props.counter + (props.variant ? " " + props.variant : null)}>{props.children}</div>
}

export default Banner
