import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

function ArticleSmall(props) {
  var image = props.image
  return (
    <Link to={props.href}>
      <article className="small">
        {!!image ?
            <img alt="" src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} />
         : null}
          <main>
            <p className="dach">{props.dach}</p>
            <p className="headline">{props.headline}</p>
            <Link className="more" to={props.href}>Beitrag lesen</Link>
          </main>
      </article>
    </Link>
  )
}

function ArticleLarge(props) {
  var image = props.image
  return (
    <Link to={props.href}>
      <article className="large">
        {!!image ?
          <img alt="" src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} />
        : null}
      <main>
        <p className="dach">{props.dach}</p>
        <p className="headline">{props.headline}</p>
        <p className="lead">{props.description}</p>
        <Link className="more" to={props.href}>Beitrag lesen</Link>
      </main>
    </article>
  </Link>
  )
}

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="news top">
            <div className="article-large">
              {posts && posts.slice(0,1).map(({ node: post}, i ) => (
                  <ArticleLarge
                    key={"post-l-"+i}
                    image={post.frontmatter.featuredimage}
                    dach={post.frontmatter.recht ? post.frontmatter.recht: post.frontmatter.date}
                    description={post.frontmatter.description}
                    headline={post.frontmatter.title}
                    href={post.fields.slug}
                  />
                ))}
            </div>
            <div className="articles-small">
              {posts && posts.slice(1,6).map(({node: post }, i ) => (
                <ArticleSmall
                  key={"post-s-"+i}
                  image={post.frontmatter.featuredimage}
                  dach={post.frontmatter.recht ? post.frontmatter.recht: post.frontmatter.date}
                  headline={post.frontmatter.title}
                  href={post.fields.slug}
                />
              ))}
            </div>
        </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query MietrechtQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { recht: {eq: "Mietrecht"}, templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                recht
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
