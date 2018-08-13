import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import AboutSubSection from './about-sub-section'
import Hr from '../components/hr'

const AboutSection = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAboutDetails(filter: {subSection : {title:{eq:null}}}) {
          edges {
            node {
              title
              content {
                content
              }
            }
          }
        }
      }
    `}
    render={data => (
      data.allContentfulAboutDetails.edges.map(({node}) => (
        <div>
          <section className="aboutSection">
            <header>
              <h1>
                {node.title}
              </h1>
            </header>
            <div className="aboutContent">
              {node.content.content}
            </div>
          </section>
          <div className="about-grid">
            <AboutSubSection section={node.title} />
          </div>
          <Hr />
        </div>
      ))
    )}
  />
)

export default AboutSection
