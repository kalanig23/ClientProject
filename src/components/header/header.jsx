import React, { Component } from 'react';
import '../header/header.css';

class Header extends Component {
    render(){
        return(
            <div className="header-main">
               <div className="header-left">
                   <img className="logo" src={require('../../image/logo.png')} ></img>
               </div>
               <div className="header-right">
                   <img className="photo" src={require('../../image/photo.png')}></img>
                   <p className="name">Nandana Chakraborty <span className="specialist">Specialist</span></p>
               </div>
            </div>
        )
    }
}

export default Header;