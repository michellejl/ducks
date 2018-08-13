import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const SocialIcons = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulSocialMedia(filter:{belongsTo:{name: {eq: "Michelle JL"}}}) {
          edges {
            node {
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
    `}
    render={data => (
      <ul className="socialMedia">
        {data.allContentfulSocialMedia.edges.map(({node}) => (
          <li key={node.id} className={`socialMediaItem ${node.type}`}>
            <a href={node.url} target="_blank" rel="noopener noreferrer">
             <img src={node.icon.file.url} className={`socialMediaImg ${node.type}`} alt={`${node.type} icon`} title={node.handle} />
            </a>
          </li>
        ))}
      </ul>
    )}
  />
)

export default SocialIcons
