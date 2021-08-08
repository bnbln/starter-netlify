import React, { useState } from "react";
import {Transition, config, animated} from "react-spring"
import { Link, graphql, StaticQuery } from 'gatsby'

function Carousel(props) {
    const [active, setActive] = useState(0)
    var data = props.data
    setTimeout(()=> setActive(active < (data.posts.edges.length-1) ? active+1 : 0), 4000)
    return(
        <div className="carousel top">
             <div className="text">
                <h2>{data.page.frontmatter.hero.title}</h2>
                <p className="lead">{data.page.frontmatter.hero.lead}</p>
                <div className="textslider">
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
            
            <div className="imagesliderwrapper">
                <div className="imageslider">
                    <Transition
                        items={active}
                        from={{ opacity: 0, translateX: 400 }}
                        enter={{ opacity: 1, translateX: 0 }}
                        leave={{ opacity: 0, translateX: -400 }}
                        reverse={active}
                        delay={250}
                        config={config.default}
                    >
                        {({ opacity, translateX }, item) =>
                        item === 0 ? (
                            <animated.img src={
                                data.posts.edges[0].node.frontmatter.picture.childImageSharp ? data.posts.edges[0].node.frontmatter.picture.childImageSharp.fluid.src : data.posts.edges[0].node.frontmatter.picture
                            } className={active === 0 ? "item active" : "item"} alt=""
                                style={{
                                    opacity: opacity,
                                    transform: translateX.to(y => `translateX(${y}px)`),
                                }}
                            />
                        ) : item === 1 ? (
                            <animated.img src={
                                data.posts.edges[1].node.frontmatter.picture.childImageSharp ? data.posts.edges[1].node.frontmatter.picture.childImageSharp.fluid.src : data.posts.edges[1].node.frontmatter.picture
                            } className={active === 1 ? "item active" : "item"} alt=""
                            style={{
                                opacity: opacity,
                                transform: translateX.to(y => `translateX(${y}px)`),
                            }}
                            />
                        ) : (
                            <animated.img src={
                                data.posts.edges[2].node.frontmatter.picture.childImageSharp ? data.posts.edges[2].node.frontmatter.picture.childImageSharp.fluid.src : data.posts.edges[2].node.frontmatter.picture
                            } className={active === 2 ? "item active" : "item"} alt="" 
                            style={{
                                opacity: opacity,
                                transform: translateX.to(y => `translateX(${y}px)`),
                            }}
                            />
                        )
                        }
                    </Transition>
                </div>
            </div>
        </div>
    )
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
  render={(data, count) => <Carousel data={data} count={count} />}
  />
  )