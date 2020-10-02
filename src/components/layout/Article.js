import React, { Component } from 'react'
import ABVCalculator from '../calculator/ABVCalculator'

export class Article extends Component {
    render() {
        return (
            <div className="article-container">
                <ABVCalculator/>
            </div>
        )
    }
}

export default Article
