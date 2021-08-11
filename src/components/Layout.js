import React from 'react'
import { Helmet } from 'react-helmet'
import CookieConsent, { getCookieConsentValue} from "react-cookie-consent";
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './all.sass'
import { withPrefix, Link } from 'gatsby'

import metadatafromyml from "../../content/settings/global.yml"

const TemplateWrapper = (props) => {
  console.log("COOKIE: ", getCookieConsentValue("gdpr"));
  console.log(props);
  return (
    <div className="layout">
      <Helmet>
        <html lang="de" />
        <title>{metadatafromyml.site}</title>
        <meta name="description" content={metadatafromyml.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={metadatafromyml.site} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {props.data ? 
          <Hero 
            hero={props.data} 
            variant={props.variant ? props.variant : "dark"}
            imageslider={props.imageslider ? props.imageslider : null}
            children={props.data.children}
          />
      :null }
      <div>{props.children}</div>
      
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        cookieName="gdpr"
        expires={150}
        disableStyles={true}
      >
        <b>Diese Seite verwendet Cookies </b>
        <br />
        <span style={{fontSize: 10}}>Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren.
        <br />
        <Link to={"/datenschutz"}>Weitere Informationen</Link>
        </span>
        
      </CookieConsent>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
