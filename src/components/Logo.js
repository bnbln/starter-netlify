import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  render() {
    return (
      <Link to={"/"}>
        <div className="logo">
          <h1 className={this.props.color}>rk.de</h1>
          {this.props.size === 'long' ? (
            <h2 className={this.props.color}>Kanzlei am Wittenbergplatz</h2>
          ) : null}
        </div>
      </Link>
    )
  }
}

export default Navbar
