import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import Layout from "../../components/Layout"
import { Link } from 'gatsby'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <Layout data={data.hero || {image: getAsset(data.image)}} variant="light" isPreview={true}>
        <IndexPageTemplate
          banner01={data.banner01 || {bannerimage: getAsset(data.bannerimage)}}
          intro={data.intro || { blurbs: [] }}
          banner02={data.banner02 || {heading: data.banner02.heading, cta: data.banner02.cta}}
        />
      </Layout>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
