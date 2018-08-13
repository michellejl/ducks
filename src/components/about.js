import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Hr from '../components/hr'

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
          <h1>About Michelle</h1>
        </header>
        <div className="aboutContent">
          {data.contentfulAuthor.bio.internal.content}
        </div>
        <Hr />
      </section>
    )}
  />
)

export default AboutBio
