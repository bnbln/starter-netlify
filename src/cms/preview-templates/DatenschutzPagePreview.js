import React from 'react'
import PropTypes from 'prop-types'
import { DatenschutzPageTemplate } from '../../templates/datenschutz-page'
import Layout from "../../components/Layout"
import { Link } from 'gatsby'

const DatenschutzPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <Layout data={data || {image: getAsset(data.image)}} isPreview={true}>
        <DatenschutzPageTemplate
          content={widgetFor('body')}
        />
      </Layout>
    )
  } else {
    return <div>Loading...</div>
  }
}

DatenschutzPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default DatenschutzPagePreview
