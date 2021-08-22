import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout'

const Thanks = (props) => (
  <Layout data={{title: "Danke", lead: "Ihre Nachricht wurde versendet. Wir werden uns zeitnah mit Ihnen in Verbindung setzen.", icon: props.data.markdownRemark.frontmatter.icon}}>
  </Layout>
)

export default () => (
  <StaticQuery
    query={graphql`
      query contactThanksQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
          frontmatter {
            title
            templateKey
            lead
            icon {
              publicURL
              extension
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Thanks data={data} count={count} />}
  />
)