import React from 'react'

export default function SgField(props) {
    return (
        <input type="text" className="field" value={props.children} onChange={() => this.props.sgChange(this.props.children)} placeholder="Intial SG. i.e. 1.045"/>
    )
}
