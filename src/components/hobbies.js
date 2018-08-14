import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const Hobbies = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulThingsIDo(sort: {fields: [title], order: ASC}) {
          edges {
            node {
              title
              description {
                description
              }
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
      <div className="hobbiesContainer">
        <section className="hobbiesDescription">
          <header>
            <h1>Things I Like To Do</h1>
          </header>
          <div className="hobbiesDescriptionContent">
            <p>I am a front end developer and teacher by trade, but I like to think I do more than just write code all day! Some of my hobbies produce things that are, at least occasionally, worth sharing. Some of those I have written about here.</p>
          </div>
        </section>
        <div className="hobbies">
          {data.allContentfulThingsIDo.edges.map(({node}) => (
            <div className={`hobby ${node.title}`}>
              <img src={node.icon.file.url} alt={`${node.title} line art icon`} />
              <h2>{node.title}</h2>
              <p>{node.description.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  />
)

export default Hobbies
