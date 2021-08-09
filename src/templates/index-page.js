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
    <Carousel />
    <Map />
    <Banner>
      <div className="left textonly">
        <h1 className="white">{banner02.heading}</h1>
      </div>
      <div className="right white textonly">
        <Button variant="white" to="/contact">{banner02.cta}</Button>
      </div>   
    </Banner>
    <BlogRoll />
  </>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    dachzeile: PropTypes.string,
    title: PropTypes.string,
    lead: PropTypes.string,
    cta: PropTypes.string,
  }),
  banner01: PropTypes.shape({
    bannerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    heading: PropTypes.string,
    subheading: PropTypes.string,
    bannercta: PropTypes.string,
  }),
  banner02: PropTypes.shape({
    heading: PropTypes.string,
    cta: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        banner01={frontmatter.banner01}
        banner02={frontmatter.banner02}
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          dachzeile
          title
          lead
          cta
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        banner01 {
          heading
          subheading
          bannercta
          bannerimage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }

        }
        banner02 {
          heading
          cta
        }
      }
    }
  }
`
