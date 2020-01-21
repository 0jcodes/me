import React, {Component} from 'react'

export default class HeaderC extends Component {
    render(){
      return(
      <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" href="/"><img src="img/logo.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
                <li className="nav-item submenu dropdown">
                  <a href="/pages" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="/pages">Portfolio Details</a></li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a href="/blog" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="/blog-details">Blog Details</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
      )
    }
}