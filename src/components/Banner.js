import React from 'react'

function Banner(props) {
  return <div className={"banner" + " nr" + props.counter}>{props.children}</div>
}

export default Banner
