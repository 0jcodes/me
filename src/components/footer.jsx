import React, {Component} from 'react'

export default class FooterC extends Component{
    render(){
      return(
        <footer className="footer_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer_top flex-column">
                <div className="footer_logo">
                  <a href="/">
                    <img src="img/logo.png" alt="" />
                  </a>
                  <h4>Follow Me</h4>
                </div>
                <div className="footer_social">
                  <a href="https://www.facebook.com/ImJunias"><i className="fa fa-facebook" /></a>
                  <a href="https://twitter.com/Imjunias"><i className="fa fa-twitter" /></a>
                  <a href="https://www.instagram.com/obed.junias/"><i className="icon-instagram" /></a>
                  <a href="https://www.linkedin.com/in/obed-junias/"><i className="icon-linkedin2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      )
    }
}