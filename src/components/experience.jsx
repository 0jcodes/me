import React, {Component} from 'react'

 export default class ExperienceC extends Component {
     render(){
       return(
        <div>
        <section className="colorlib-experience" data-section="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="main_title text-left animate-box">
                <h2>Experience / Internships <br></br>
                  Timeline  </h2>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Back End Developer</a> <span>June 2019 - August 2019</span></h2>
                        <p><ul><li> Analyzed requirements and designed, developed and implemented a software application called - The Lecture Recording System. </li>
                            <li>Researched new technologies, software packages and hardware products for use in website projects.</li>
                            <li>Used programming capabilities in Node.js, MongoDB and AWS Lambda and other libraries as needed.</li> </ul></p>
                          
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
        <div className="timeline-entry-inner">
          <div className="timeline-icon color-none">
          </div>
        </div>
      </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      )
     }
 }