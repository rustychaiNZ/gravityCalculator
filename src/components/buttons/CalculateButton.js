import React from 'react'

function CalculateButton(props) {
    return (
        <button className="btn btn-primary btn-animation mr-1" type="submit" onClick={props.children}>Calculate</button>
    )
}

export default CalculateButton
