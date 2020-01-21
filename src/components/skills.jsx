import React, {Component} from 'react'

export default class SkillsC extends Component {
    render(){
      return(
        <section className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-animate-effect="fadeInLeft">
              <div className="main_title">
                <h2>What I Do?</h2>
                <p>
                Here are some of my<br>
                </br>expertise
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s1.png" alt="" />
                <h4>Web Development</h4>
                <p>I have experience in building websites using popular frameworks like Node.Js,Flask,React</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s2.png" alt="" />
                <h4>Data Structures and Algortihms</h4>
                <p>I have a good grasp over Data Structures,Analysis and Design of Algorithms</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s3.png" alt="" />
                <h4>DataBase Management System</h4>
                <p>I have some experience over SQL and MongoDB</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s4.png" alt="" />
                <h4>Computer Networks</h4>
                <p>I have a good understanding of the networking terms, terminologies and protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }
}