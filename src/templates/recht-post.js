import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Hero from "../components/Hero"
import BlogRoll from '../components/BlogRoll'
import Banner from '../components/Banner'

export const BlogPostTemplate = ({
  data,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  console.log("data", data);
  return (
    <>
      {helmet || ''}
      <Hero hero={{
        icon: data.markdownRemark.frontmatter.image,
        title: title,
        lead: data.markdownRemark.frontmatter.lead,
        image: data.markdownRemark.frontmatter.picture,
        list: data.markdownRemark.frontmatter.article
      }} />
      {data.markdownRemark.frontmatter.banner.map((item,i)=> (
        <Banner key={"banner"+i} counter={i}>
          <div className="left white">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </Banner>
      ))}
      <BlogRoll />
      {data.markdownRemark.frontmatter.article.map((item,i)=> (
        <section className="left right top">
          <h4 id={i}>{item.title}</h4>
          <ReactMarkdown>{item.body}</ReactMarkdown>
        </section>
      ))}
    </>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data);
  return (
    <Layout>
      <BlogPostTemplate
        data={data}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query RechtPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        lead
        image {
          publicURL
          extension
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
          title
          text
        }
        article {
          title
          body
        }
      }
    }
  }
`
