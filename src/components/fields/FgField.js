import React from 'react'

export default function FgField(props) {
    return (
        <input type="text" className="field" value={props.children} onChange={() => this.props.fgChange(this.props.children)} placeholder="1.0xx"></input>
    )
}
