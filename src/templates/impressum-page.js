import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const ImpressumPageTemplate = ({
  hero,
  banner01,
  banner02
}) => (
  <>
   <h1>Impressum</h1>
  </>
)

ImpressumPageTemplate.propTypes = {
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

const ImpressumPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ImpressumPageTemplate
        hero={frontmatter.hero}
        banner01={frontmatter.banner01}
        banner02={frontmatter.banner02}
      />
    </Layout>
  )
}

ImpressumPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ImpressumPage

export const pageQuery = graphql`
  query ImpressumPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "impressum-page" } }) {
      frontmatter {
        title   
      }
    }
  }
`
