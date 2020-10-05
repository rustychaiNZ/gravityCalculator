import React, { Component } from 'react'
import Title from './Title'
import PointlessAction from './PointlessAction'

export class SiteHeader extends Component {
    render() {
        return (
            <div className="header-container">
                <Title/>
                <PointlessAction/>
            </div>
        )
    }
}

export default SiteHeader
