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


export const DatenschutzPageTemplate = ({
  hero,
  banner01,
  banner02
}) => (
  <>
   <h1>Datenschutzerklärung</h1>
  </>
)

DatenschutzPageTemplate.propTypes = {
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

const DatenschutzPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <DatenschutzPageTemplate
        hero={frontmatter.hero}
        banner01={frontmatter.banner01}
        banner02={frontmatter.banner02}
      />
    </Layout>
  )
}

DatenschutzPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default DatenschutzPage

export const pageQuery = graphql`
  query DatenschutzPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "datenschutz-page" } }) {
      frontmatter {
        title   
      }
    }
  }
`
