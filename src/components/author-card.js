import React, { Component } from 'react'


class AuthorCard extends Component {
  author = this.props.data.allContentfulAuthor;
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default AuthorCard

export const pageQuery = graphql`
  query pageQuery {
    allContentfulAuthor {
      edges {
        node {
          name
        }
      }
    }
  }
`