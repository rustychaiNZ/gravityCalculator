import React, { Component } from 'react'

export class SideBar extends Component {
    render() {
        // console.log(Moustache)
        return (
            <div className="sidebar-container">
                <div className="sidebar-container-item">
                    <a href="https://russelljohnson.co.nz" target="_blank" rel="noopener noreferrer" className="sidebar-nav-item btn-animation">
                        <div className="icon icon-moustache" background="./uiIcons/moustacheIcon.png"/>
                        {/* <img src={Moustache} className="icon icon-moustache" alt="moustache icon"/> */}
                    Site Creator
                    </a>
                </div>
            </div>
        )
    }
}

export default SideBar
