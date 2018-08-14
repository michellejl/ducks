import React from 'react'

import Layout from '../components/layout'
import AboutBio from '../components/about'
import AboutSection from '../components/about-section'
import Hobbies from '../components/hobbies'

const IndexPage = () => (
  <Layout>
    <AboutBio />
    <Hobbies />
    <AboutSection />
  </Layout>
)

export default IndexPage
