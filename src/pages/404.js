import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout variant="light" data={{
    title: "Diese Seite existiert nicht",
    lead: "You just hit a route that doesn&#39;t exist... the sadness."
  }}>
  </Layout>
)

export default NotFoundPage
