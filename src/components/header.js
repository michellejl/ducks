import React from 'react'
import AuthorCard from '../components/author-card'


const Header = ({ siteTitle }) => (
  <header>
    <AuthorCard />
     {/* <span className='siteTitle'>{siteTitle}</span> */}
  </header>
)

export default Header
