import React from 'react'
import AuthorCard from '../components/author-card'
import Nav from '../components/nav'


const Header = ({ siteTitle }) => (
  <header>
    <h1 className='siteTitle'>
      <a href="/">
        {siteTitle}
      </a>
    </h1>
    <AuthorCard />
    <Nav />
  </header>
)

export default Header
