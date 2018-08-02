import React from 'react'

import AuthorCard from '../components/author-card'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    Hello World
    <AuthorCard />
  </Layout>
)

export default IndexPage
