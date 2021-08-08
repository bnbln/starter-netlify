import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'

import BlogRoll from '../../components/BlogRoll'

class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data);
    return (
      <Layout>
       <Hero hero={[]} variant="light" />

        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
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
    markdownRemark(frontmatter: {templateKey: {eq: "recht-page"}}) {
      frontmatter {
        templateKey
        hero {
          lead
          title
        }
      }
    }
  }
`}
render={(data, count) => <BlogIndexPage data={data} count={count} />}
/>
)
