import React, {useState} from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import BlogRoll from '../../components/BlogRoll'

const BlogIndexPage = () => {
    const [menu, setMenu] = useState(false)
    function getMenu (menustate) {
      setMenu(menustate)
    }
    console.log(menu);
    return (
      <Layout className={ menu === false ? "layout menu-closed" : "layout menu-open"}>
        <Hero menu={getMenu} hero={{title: "Aktuelles", lead: "Mietrecht in Berlin ist oft umstritten - Renovierungspflicht, Wasserschaden, Reparaturen und Räumung"}} variant="dark" />
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

export default BlogIndexPage