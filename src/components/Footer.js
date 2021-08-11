import React from 'react'
import Logo from './Logo'
import { Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import meta from "../../content/settings/global.yml"

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Logo size="long" color="white" meta={meta}></Logo>
        <main className="top">
          <div>
            <ReactMarkdown>{meta.contact.info}</ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>{meta.contact.contact}</ReactMarkdown>
          </div>
          <div className="footernav">
            <nav>
              {meta.menu.map((item, i)=> <Link className="navbar-item" to={item.to} key={"footermainnav-"+i}>{item.name}</Link>)}
            </nav>
            <nav>
              {meta.footermenu.map((item, i)=> <Link className="navbar-item" to={item.to} key={"footernav-"+i}>{item.name}</Link>)}
            </nav>
          </div>
        </main>
        <p className="copyright top">Alle Rechte vorbehalten. © Copyright {new Date().getFullYear()}</p>
      </footer>
    )
  }
}

export default Footer
