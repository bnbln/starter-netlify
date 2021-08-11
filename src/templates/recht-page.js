import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Carousel from "../components/Carousel"

class BlogIndexPage extends React.Component {

  render() {
    const { data } = this.props
    var active = 0
    console.log(data.page.frontmatter.banner);
    console.log(active);
    setTimeout(()=> active = (active < (data.posts.edges.length-1) ? active+1 : 0), 4000)
    return (
      <Layout hero={data.page.frontmatter.hero} variant="light">
        <Hero >
          <Carousel />
        </Hero>
        <div>
          {data.page.frontmatter.banner.map((item, i)=> (
            <div key={"banner"+i}> 
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
query={graphql`
  {
    page: markdownRemark(frontmatter: {templateKey: {eq: "recht-page"}}) {
      id
      frontmatter {
        hero {
          lead
          title
        }
        banner {
          text
          title
        }
      }
    }
    posts: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "recht-post"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            lead
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            picture {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            banner {
              text
              title
            }
            article {
              body
              title
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
