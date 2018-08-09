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
                }
              }
              social_media {
              id
              type
              handle
              url
              icon {
                file {
                  url
                }
              }
            }
          }
        }
      }
      }
    `}
    render={data => (
      data.allContentfulAuthor.edges.map(({ node }, index) => (
        <aside className="AuthorCard">
          <img src={node.profilePhoto.file.url} alt={node.name} className="profilePhoto" />
          <div className="author-information">
            <h1>
              <a key={index} href={node.website}>
                {node.name}
              </a>
            </h1>
            <ul className="socialMedia">

              {node.social_media.map((socialItem) => (
                <li key={socialItem.id} className={`socialMediaItem ${socialItem.type}`}>
                  <a href={socialItem.url} target="_blank">
                    <img src={socialItem.icon.file.url} className={`socialMediaImg ${socialItem.type}`} alt={`${socialItem.type} icon`} title={socialItem.handle} />
                  </a>
                </li>
              ))}

            </ul>
          </div>
        </aside>
      ))
    )}
  />
)

export default AuthorCard
