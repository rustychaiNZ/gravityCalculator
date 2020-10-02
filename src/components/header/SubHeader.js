import React, { Component } from 'react'

export class SubHeader extends Component {
    render() {
        return (
            <div className="subheader-container">
                <div className="subheader-title">
                    <h2>Gravity Calculator</h2>
                </div>
                <div className="subheader-description">
                    <p className="subheader-note">Calculate the strength of your beer</p>
                </div>
            </div>
        )
    }
}

export default SubHeader
