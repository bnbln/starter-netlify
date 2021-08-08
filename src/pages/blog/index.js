import React from 'react'

import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero hero={{title: "Aktuelles", lead: "Mietrecht in Berlin ist oft umstritten - Renovierungspflicht, Wasserschaden, Reparaturen und Räumung"}} variant="dark" />
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
}
