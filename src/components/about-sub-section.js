import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const AboutSubSection = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAboutDetails(filter: {subSection : {title:{eq:"Community Involvement"}}}) {
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
        <section className="aboutSection aboutSubSection">
          <p> 
            <span className="title">{node.title}</span> 
            {node.content.content} 
          </p> 
        </section>
      ))
    )}
  />
)

export default AboutSubSection
