import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const AboutBio = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAuthor(name: {eq:"Michelle JL"}) {
          bio {
            internal {
              content
            }
          }
        }
      }
    `}
    render={data => (
      <section className="bio aboutSection">
        <header>
          <h1>About Me</h1>
        </header>
        <div>
          {data.contentfulAuthor.bio.internal.content}
        </div>
      </section>
    )}
  />
)

export default AboutBio
