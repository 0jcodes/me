import React, {Component} from 'react'

export default class ProjectsC extends Component{
    render(){
      return(
        <section className="portfolio_area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-animate-effect="fadeInLeft">
              <div className="main_title text-left">
                <h2>my work <br></br>
                  Recently done projects </h2>
              </div>
            </div>
          </div>
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">all</li>
              <li data-filter=".popular">popular</li>
              <li data-filter=".latest"> latest</li>
              <li data-filter=".following">following</li>
              <li data-filter=".upcoming">upcoming</li>
            </ul>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              <div className="col-lg-4 col-md-6 all ">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/learning2.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/learning2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="/pages">E-Learning Portal</a></h4>
                    <p>A simple website made using HTML, CSS and JS for the front end and PHP, MySQL for the back-end where a user can login 
                        using his credentials and can get the course videos or links to any of the course videos of his choice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/cric2.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/cric2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="/pages">Cricket Statistics and Analysis</a></h4>
                    A web-application in python using flask.
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/movie2.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/movie2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="/pages">Movie Recommendation System</a></h4>
                    <p>A movie recommendation system using kaggle imdb dataset, 
                        which recommends movies based on defferent approaches.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/retail2.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/retail2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="/pages">Retail Store Management System</a></h4>
                    <p>A simple user interface was made using C# which was connected to Oracle Database where user can trade 
                      and bills are created for the items sold and bought by the user. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all ">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/path2.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/path2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="/pages">Simulation of Dijkstra's Algorithm using Java Applet</a></h4>
                    <p>User can create nodes, draw edges and assign weights and then when the algorithm is run it creates a path from the source node to all the other destinations 
                        in the smallest path available.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/univ1.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/univ1.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="/pages">University Eligibility Predictor</a></h4>
                    <p>A system implemented in C++ where the student after giving his marks as the input after selecting the college of his choice will get to know 
                        whether he is eligible or not for that particular college.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all latest poular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/digit2.png" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/digit2.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="/pages">Digit Recognizer</a></h4>
                    <p>A Deep Learning Model which recognizes the hand written images of digits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/blockchain2.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/blockchain2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>BlockChain Working Model</h4>
                    <p>A prototype to demonstrate how working of block-chain technology happens under the hood.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/res1.jpg" alt="" />
                    <div className="overlay" />
                    <a href="img/portfolio/p9.res1" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="pages">Restaurant Recommendation System</a></h4>
                    <p>A Recommender system which recommends the restaurants.</p>
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