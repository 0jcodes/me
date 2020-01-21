import React, { Component } from 'react';
import './App.css';
import HeaderC from './components/header'
import HomeC from './components/home'
import SkillsC from './components/skills'
import ProjectsC from './components/projects'
import ExperienceC from './components/experience'
import EducationC from './components/education'
import FooterC from './components/footer'
import ContactC from './components/contact'
import AboutC from './components/about'


class Home extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
				<div id="colorlib-main">
					<HeaderC></HeaderC>
					<HomeC></HomeC>
          <AboutC></AboutC>
					<SkillsC></SkillsC>
          <EducationC></EducationC>
          <ExperienceC></ExperienceC>
          <ProjectsC></ProjectsC>
          <ContactC></ContactC>
          <FooterC></FooterC>
          	</div>
      	</div>
      </div>
    );
  }
}

export default Home;