import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Map from '../components/Map'
import BlogRoll from '../components/BlogRoll'

import Button from '../components/Button'


export const IndexPageTemplate = ({
  hero,
  banner01,
  intro,
  banner02
}) => (
  <>
    <Hero hero={hero} variant="light" />
    <Banner>
      <div className="left">
        {banner01.bannerimage ?
          <img 
            src={!!banner01.bannerimage.childImageSharp ? banner01.bannerimage.childImageSharp.fluid.src : banner01.bannerimage}
            alt=""
          />
        : null}
      </div>
      <div className="right white">
        <h2>{banner01.heading}</h2>
        <p className="lead">{banner01.subheading}</p>
        <Button variant="white" to="/contact">{banner01.bannercta}</Button>
      </div>
    </Banner>
    <Carousel data={intro} />
    <Map />
    <Banner>
      <div className="left" style={{paddingTop:40, paddingBottom: 40}}>
        <h1 className="white" style={{textAlign: "right"}}>{banner02.heading}</h1>
      </div>
      <div className="right white" style={{paddingTop:40, paddingBottom: 40}}>
        <Button variant="white" to="/about">{banner02.cta}</Button>
      </div>   
    </Banner>
    <BlogRoll />
  </>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    lead: PropTypes.string,
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query RechtPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "recht-page" } }) {
      frontmatter {
        hero {
          title
          lead
        }
      }
    }
  }
`
