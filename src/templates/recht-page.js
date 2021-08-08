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


// export const IndexPageTemplate = ({
//   data,
//   hero,
//   banner01,
//   intro,
//   banner02
// }) => (
//   <>
//     <Hero hero={hero} variant="light" />
//     {console.log(data)}
//     {/* <Banner>
//       <div className="left">
//         {banner01.bannerimage ?
//           <img 
//             src={!!banner01.bannerimage.childImageSharp ? banner01.bannerimage.childImageSharp.fluid.src : banner01.bannerimage}
//             alt=""
//           />
//         : null}
//       </div>
//       <div className="right white">
//         <h2>{banner01.heading}</h2>
//         <p className="lead">{banner01.subheading}</p>
//         <Button variant="white" to="/contact">{banner01.bannercta}</Button>
//       </div>
//     </Banner>
//     <Carousel data={intro} />
//     <Map />
//     <Banner>
//       <div className="left" style={{paddingTop:40, paddingBottom: 40}}>
//         <h1 className="white" style={{textAlign: "right"}}>{banner02.heading}</h1>
//       </div>
//       <div className="right white" style={{paddingTop:40, paddingBottom: 40}}>
//         <Button variant="white" to="/about">{banner02.cta}</Button>
//       </div>   
//     </Banner>
//     <BlogRoll /> */}
//   </>
// )

// IndexPageTemplate.propTypes = {
//   data: PropTypes.shape({
//     posts: PropTypes.object
//   }),
//   hero: PropTypes.shape({
//     title: PropTypes.string,
//     lead: PropTypes.string,
//   })
// }

// const IndexPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark
//   return (
//     <Layout>
//       <IndexPageTemplate
//         hero={frontmatter.hero}
//         data={data}
//       />
//     </Layout>
//   )
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     page: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//     posts: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   }),
// }

// export default IndexPage
export default ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const pageQuery = graphql`
  query RechtPageTemplate {
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
    posts: markdownRemark(frontmatter: {templateKey: {eq: "recht-post"}}) {
      id
      frontmatter {
        title
        lead
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
