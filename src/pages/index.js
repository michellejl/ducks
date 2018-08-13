import React from 'react'

import Layout from '../components/layout'
import AboutBio from '../components/about'
import AboutSection from '../components/about-section'
import Hr from '../components/hr'

const IndexPage = () => (
  <Layout>
    <div className="about">
      <AboutBio />
      <AboutSection />
    </div>
    <Hr />
  </Layout>
)

export default IndexPage
