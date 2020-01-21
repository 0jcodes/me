import React, {Component} from 'react'

 export default class AboutC extends Component {
     render(){
       return(
        <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className src="img/about-us.png" alt="" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>let’s <br />
                  Introduce about <br />
                  myself</h2>
                <p>
                "I have no special talent. I am only passionately curious." ~Albert Einstein
                </p>
                <p>
                 The above quote encapsulates the whole of my personality.
                I am an ambitious computer science student who likes to code,
                I am adept at developing plans and aligning instruction with current learning goals, problem- solver and analytical leader with strong attention to detail and sound judgment focused on continuous improvement. 
                </p>
                <p>
                Core focuses of interest includes: Machine Learning, Deep Learning, and Data Analytics. 
                At present, I have limited experience in these fields but I am very much keen on excelling in these fields and scale to greater heights in the near future.
                </p>
                <a className="primary_btn" href="https://obedjunias.github.io/Resume.pdf"><span>Download CV</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
       )
     }
    }