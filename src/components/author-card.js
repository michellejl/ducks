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
            }
          }
        }
        allContentfulSocialMedia {
          edges {
            node {
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
    `}
    render={data => (
      data.allContentfulAuthor.edges.map(({ node }, index) => (
        <aside className="AuthorCard">
          <img src={node.profilePhoto.file.url} alt={node.name} className="profilePhoto" />
          <div class="author-information">
            <h1>
              <a key={index} href={node.website}>
                {node.name}
              </a>
            </h1>
            <ul className="socialMedia">
              {data.allContentfulSocialMedia.edges.map(({node}, index) => (
                <li key={index} className={`socialMediaItem ${node.type}`}>
                  <a href={node.url}>
                    <img src={node.icon.file.url} className={`socialMediaImg ${node.type}`} alt={`${node.type} icon`} title={node.handle} />
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
