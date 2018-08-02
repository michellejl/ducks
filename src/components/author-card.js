import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const AuthorCard = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAuthor {
          edges {
            node {
              name
              website
              profilePhoto {
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {data.allContentfulAuthor.edges.map(({ node }, index) => (
          <h1>
            <a href={node.website}>
              {node.name} | {node.website}
            </a>
          </h1>

        ))}
      </header>
    )}
  />
)

export default AuthorCard



