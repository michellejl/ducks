import React from 'react'
import { StaticQuery, graphql } from "gatsby"

// One day this will allow variables so that I don't need to have the string "Community Involvement" hard coded here and I will be able to have lots of different sections/subsections all sharing components.... in the mean time... I will cry a little bit.

const AboutSubSection = ({section}) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAboutDetails(filter: {subSection : {title:{eq: "Community Involvement"}}}) {
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
