import React from 'react'
import Logo from './Logo'
import { Link } from 'gatsby'
import Content, { HTMLContent } from './Content'

import meta from "../../content/settings/global.yml"

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Logo size="long" color="white"></Logo>
        <main>
          <div>
            <Content content={meta.contact.info} />
          </div>
          <div>
            <Content content={meta.contact.contact} />
          </div>
          <div>
            <nav>
              {meta.menu.map((item, i)=> <Link className="navbar-item" to={item.to} key={"footermainnav-"+i}>{item.name}</Link>)}
            </nav>
            <nav>
              {meta.footermenu.map((item, i)=> <Link className="navbar-item" to={item.to} key={"footernav-"+i}>{item.name}</Link>)}
            </nav>
          </div>
        </main>
      </footer>
    )
  }
}

export default Footer
