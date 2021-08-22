import React from 'react'
import PropTypes from 'prop-types'
import { ImpressumPageTemplate } from '../../templates/impressum-page'
import Layout from "../../components/Layout"

const ImpressumPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <Layout data={data || {image: getAsset(data.image)}} isPreview={true}>
        <ImpressumPageTemplate
          content={widgetFor('body')}
        />
      </Layout>
    )
  } else {
    return <div>Loading...</div>
  }
}

ImpressumPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default ImpressumPagePreview
