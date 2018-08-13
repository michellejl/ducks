import React from 'react'
import { StaticQuery, graphql } from "gatsby"

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
              about_details {
                title
                content {
                  content
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allContentfulAboutDetails.edges.map(({node}) => (
          <section className="aboutSection">
            <header>
              <h1>
                {node.title}
              </h1>
            </header>
            <div>
              {node.content.content}
            </div>
            {node.about_details ? (
              <div>
                {node.about_details.map((node) => (
                  <section className="aboutSubSection">
                    <p>
                      <span className="title">{node.title}</span>
                      {node.content.content}
                    </p>
                  </section>
                ))}
              </div>
              ) : (
              <p>hello</p>
            )}
          </section>
        ))}
      </div>
    )}
  />
)

export default AboutSection
