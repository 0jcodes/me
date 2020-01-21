import React, {Component} from 'react'

 export default class EducationC extends Component { /*Education Component */
     render(){
       return(
      <section className="colorlib-education" data-section="education">
        <div className="container">
        <div className="colorlib-narrow-content">
          <div className="row">
          <div className="col-lg-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="main_title text-left animate-box">
                <h2>Education</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Computer Science
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        <p>Pursuing Computer Science Undergraduate Full-time Course at B M S College of Engineering.</p>
                        <ul>
                          <li>Duration : 4 years (2017 - 2021)</li>
                          <li>Scorecard : 9.01 CGPA (Till 5th Semester)</li>
                          <li><a href="https://www.bmsce.sc.in/" target="_blank" rel="noopener noreferrer">B M S College of Engineering, Bangalore - 560019</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">High School in Computer Science
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        <p>Finished Pre University in Physics-Chemistry-Mathematics at Sri Chaitanya Educational Institution, Hyderabad.</p>	
                        <ul>
                          <li>Duration : 2 years (2015 - 2017)</li>
                          <li>Scorecard : 96.6%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Senior Secondary
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="panel-body">
                        <p>Finished High School at Guru Nanak Public School, GNPS Bidar.</p>	
                        <ul>
                          <li>Duration : Till 2015</li>
                          <li>Scorecard : 9.6 CGPA</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      )
     }
 }