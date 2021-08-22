import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Banner from "../components/Banner"
import {Transition, config, animated} from "react-spring"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


function RechtPage(props) {
  var data = props.data
  const [active, setActive] = useState(0)
  setTimeout(()=> setActive(active < (data.posts.edges.length-1) ? active+1 : 0), 4000)
  const imageSliderWrapper = (
    <div className="imageslider">
          <Transition
              items={active}
              from={{ opacity: 0, translateX: 0 }}
              enter={{ opacity: 1, translateX: 0 }}
              leave={{ opacity: 0, translateX: -400 }}
              reverse={active}
              delay={250}
              config={config.default}
          >
              {({ opacity, translateX }, item) =>
              data.posts.edges.map((post, i) => 
                item === i ? 
                <animated.div className="imageWrapper" style={{
                  width: "100%",
                  height: "100%",
                  background: "url("+(post.node.frontmatter.picture.childImageSharp ? post.node.frontmatter.picture.childImageSharp.fluid.src : post.node.frontmatter.picture)+") center center",
                  backgroundSize: "cover",
                  opacity: opacity,
                  transform: translateX.to(y => `translateX(${y}px)`),
                  position: "absolute"
              }} />
                  : null
            )}
          </Transition>
      </div>
  ) 
  const [sliderRef, slider] = useKeenSlider()
  return(
    <Layout 
      data={{ 
        ...data.page.frontmatter.hero,
        children: (
          <div className="carousel single" style={{
            padding: "0px",
            marginTop: "20px"
          }}>
          <div className="text" style={{
            padding: "0px",
            margin: "0px"
          }}>
                <div className="textslider" style={{
            padding: "0px",
            margin: "0px",
            marginTop: 24
          }}>
                    {data.posts.edges.map((item,i)=> (
                        <Link to={item.node.fields.slug} id={i} key={"carouselitem-"+i}>
                            <div className={active === i ? "item active" : "item"}>
                                {item.node.frontmatter.image.extension === "svg" ? 
                                    <img src={item.node.frontmatter.image.publicURL} alt="" />
                                    : 
                                    <img src={item.node.frontmatter.image.childImageSharp ? item.node.frontmatter.image.childImageSharp.fluid.src : item.node.frontmatter.image} alt="" />
                                }
                                <h4>{item.node.frontmatter.title}</h4>
                            </div>
                        </Link>
                    )
                    )}
                </div>
            </div>
          </div>

        )
      }} variant="light" 
    imageslider={imageSliderWrapper}>
        <div>
          
            <Banner variant="light">
            {data.page.frontmatter.banner.map((item, i)=> (
              <div className="half" key={"banner"+i}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
            </Banner>
          
        </div>
      </Layout>
  )
}

RechtPage.propTypes = {
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
          fields {
            slug
          }
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
render={(data, count) => <RechtPage data={data} count={count} />}
/>
)
