import React from 'react'
import AuthorCard from '../components/author-card'
import Nav from '../components/nav'


const Header = ({ siteTitle }) => (
  <header>
    <AuthorCard />
    <Nav />
    {/* <span className='siteTitle'>{siteTitle}</span> */}
  </header>
)

export default Header
