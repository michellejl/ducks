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
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {data.allContentfulAuthor.edges.map(({ node }, index) => (
          node.name
        ))}
      </header>
    )}
  />
)

export default AuthorCard



