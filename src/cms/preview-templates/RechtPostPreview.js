import React from 'react'
import PropTypes from 'prop-types'
import { RechtPostTemplate } from '../../templates/recht-post'
import Layout from "../../components/Layout"


const RechtPostPreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <Layout data={data || {image: getAsset(data.image), icon: getAsset(data.icon)}} isPreview={true}>
    <RechtPostTemplate
      banner={data.banner}
      article={data.article}
    />
    </Layout>
  )
}

RechtPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default RechtPostPreview
