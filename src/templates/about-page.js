import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Hero from '../components/Hero'


export const AboutPageTemplate = ({ title, lead, cta, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <Hero hero={
        {
          title: title, 
          lead: lead,
          cta: cta,
          // image: image
        }
      }
      variant="dark" /> 
      <section className="mymargins">
        <PageContent className="content" content={content} />
      </section>
    </>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        lead={post.frontmatter.lead}
        cta={post.frontmatter.cta}
        // image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        lead
        cta

      }
    }
  }
`
