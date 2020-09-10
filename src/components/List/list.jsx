import React, { Component } from 'react';
import '../List/list.css';

class Header extends Component {
    render(){
        return(
            <div className="list-main">
                <ul className="list">
                    <img src={require('../../image/Group 25.png')}></img>
                    <img src={require('../../image/Group 24.png')}></img>
                    <img src={require('../../image/Group 23.png')}></img>
                    <img src={require('../../image/Group 145.png')}></img>
                    <img src={require('../../image/Group 21.png')}></img>
                    {/* <li>Overview</li>
                    <li>Children</li>
                    <li>Groups</li>
                    <li>Activities</li>
                    <li>Calendar</li> */}
                </ul>
            </div>
        )
    }
}

export default Header;