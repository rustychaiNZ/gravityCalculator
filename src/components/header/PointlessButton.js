import React, { Component } from 'react'
import ClearButton from '../buttons/ClearButton'

export class PointlessButton extends Component {
    render() {
        return (
            <div className="header-button">
                <ClearButton>This Does Nothing</ClearButton>
            </div>
        )
    }
}

export default PointlessButton
