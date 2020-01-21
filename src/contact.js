import React, { Component } from 'react';
import './App.css';
import HeaderC from './components/header'
import ContactC from './components/contact'
import FooterC from './components/footer'
import BannerC from './components/banner'

class Contact extends Component{
    render(){
        return(     
                <div id="colorlib-page">
                    <div id="container-wrap">
                    <div id="colorlib-main">
                        <HeaderC></HeaderC>
                        <BannerC name="Contact Me"></BannerC>
                        <ContactC></ContactC>
                        <FooterC></FooterC>
                    </div>
                    </div>
                </div>
        )
    }
}
export default Contact;