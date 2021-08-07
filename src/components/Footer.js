import React from 'react'
import Logo from './Logo'

// import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Logo size="long" color="white"></Logo>
        <main>
          <div>
            <p>
              <b>Rechtsanwälte in Bürogemeinschaft</b>
            </p>
            <p>
              TS <br /> Zivilrecht
            </p>
            <p>
              TS <br /> Zivilrecht
            </p>
            <p>
              TS <br /> Zivilrecht
            </p>
          </div>
          <div>
            <p>
              AnsStr 13 <br /> Berlin
            </p>
            <p>
              Telefon: <br />
              Fax: <br />
              Mail:{' '}
            </p>
          </div>
          <div>
            <nav></nav>
          </div>
        </main>
      </footer>
    )
  }
}

export default Footer
