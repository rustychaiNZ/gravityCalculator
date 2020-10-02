import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        return (
            <textarea className="field-paragraph" rows="2" placeholder="Please type a commet..."></textarea>
        )
    }
}

export default Comment
