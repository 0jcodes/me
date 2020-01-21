import React, {Component} from 'react'
export default class BannerC extends Component{
    render(){
        return (

            <section className="banner_area section_gap_bottom">
              <div className="banner_inner d-flex align-items-center">
                <div className="container">
                  <div className="banner_content text-center">
                    <h2>{this.props.name}</h2>
                    <div className="page_link">
                      <a href="/">Home</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
    }
}