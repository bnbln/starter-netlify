import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import Layout from "../../components/Layout"


const AboutPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log("daten",data);
  if (data) {
    return (
      <Layout data={data || {image: getAsset(data.image)}} isPreview={true}>
        <AboutPageTemplate
          content={widgetFor('body')}
        />
    </Layout>
    )
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default AboutPagePreview
