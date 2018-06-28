import * as React from 'react'

const logo = require('../../../assets/pisang.jpg')


const navbar = {
  backgroundImage: 'url(`https://www.nadipos.com/blog/wp-content/uploads/2018/01/nugget.jpg`)',
  backgroundColor: 'red'
}

export const Header = () => {
  return(
    <div>
      <section className="nav-bar">
        <nav id="logo" style={navbar}></nav>
        <nav id="main-nav">
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Contacts</ul>
        </nav>
      </section>
    </div>
  )
}
