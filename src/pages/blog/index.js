import React, {useState} from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const BlogIndexPage = (props) => {
    const [menu, setMenu] = useState(false)
    function getMenu (menustate) {
      setMenu(menustate)
    }
    const data = props.data.markdownRemark.frontmatter
    return (
      <Layout className={ menu === false ? "layout menu-closed" : "layout menu-open"} data={data}>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }

export default () => (
  <StaticQuery
    query={graphql`
      query newsQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "news-page"}}) {
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
    render={(data, count) => <BlogIndexPage data={data} count={count} />}
  />
)