import React, {Component} from 'react'

export default class HomeC extends Component{
    render(){
return(<section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">H3ll0</h3>
                  <h1 className="text-uppercase">I am Obed Junias</h1>
                  <h5 className="text-uppercase">Computer Science Undergraduate</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn tr-bg" href="https://obedjunias.github.io/Resume.pdf"><span>Get CV</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className src="img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
)
    }
}

