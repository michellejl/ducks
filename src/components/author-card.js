import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SocialIcons from './social-icons'

const AuthorCard = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAuthor(name: {eq:"Michelle JL"}) {
          name
          website
          profilePhoto {
            file {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <aside className="AuthorCard">
       <img src={data.contentfulAuthor.profilePhoto.file.url} alt={data.contentfulAuthor.name} className="profilePhoto" />
       <div className="author-information">
        <h1>
          <a href={data.contentfulAuthor.website}>
            {data.contentfulAuthor.name}
          </a>
        </h1>
        <SocialIcons />
       </div>
      </aside>
    )}
  />
)

export default AuthorCard
