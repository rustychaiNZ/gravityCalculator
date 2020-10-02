import React, { Component } from 'react'
import Title from './Title'
import PointlessButton from './PointlessButton'

export class SiteHeader extends Component {
    render() {
        return (
            <div className="header-container">
                <Title/>
                <PointlessButton/>
            </div>
        )
    }
}

export default SiteHeader
