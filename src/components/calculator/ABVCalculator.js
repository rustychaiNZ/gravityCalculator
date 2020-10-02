import React, { Component } from 'react'
import CalculateButton from '../buttons/CalculateButton'
import ClearButton from '../buttons/ClearButton'

class ABVCalculator extends Component {
    constructor(props){
        super(props)

        this.state = {
            sg : '',
            fg : '',
            abv : 0,
            formOutstd330 : 0,
            formOutstd750 : 0,
            formOutstd1250 : 0,
            formOutstd2000 : 0,
            formOutAbv : 'ABV'
        }
    }

    handleSgChange = event => {
        this.setState({
            sg: event.target.value
        })
    }
    handleFgChange = event => {
        this.setState({
            fg: event.target.value
        })
    }
    handleSubmit = event =>{
        let formOutSg = this.state.sg
        let formOutFg = this.state.fg
        let formOutAbv = ((formOutSg-formOutFg)*131.5).toFixed(2)
        let dertByAbv = 0.789 * formOutAbv
        let formOutStd330 = (0.33 * dertByAbv).toFixed(2)
        let formOutStd750 = (0.75 * dertByAbv).toFixed(2)
        let formOutStd1250 = (1.25 * dertByAbv).toFixed(2)
        let formOutStd2000 = (1.25 * dertByAbv).toFixed(2)
        this.setState({
            formOutSg,
            formOutFg,
            formOutAbv,
            formOutStd330,
            formOutStd750,
            formOutStd1250,
            formOutStd2000
        })
        event.preventDefault()
    }
    handleClear = event =>{
        this.setState({
            sg : '',
            fg : '',
            abv : 0,
            formOutstd330 : '',
            formOutstd750 : '',
            formOutstd1250 : '',
            formOutstd2000 : '',
            formOutAbv : 'ABV'
        })
    }

    render() {
        const {sg, fg, formOutAbv, formOutStd330, formOutStd750, formOutStd1250, formOutStd2000} = this.state
        return (
            // Abv Calculator
            <form onSubmit={this.handleSubmit} onReset={this.handleClear}>
                <div className="calculator-container">
                    <div className="calculator-frame">
                        <h3 className="calculator-display">{formOutAbv}%</h3>

                            <h4>Starting Gravity (SG)</h4>
                            <input type="text" className="field" value={sg} onChange={this.handleSgChange} placeholder="Intial SG. i.e. 1.045"/>
                            <h4>Finishing Gravity (FG)</h4>
                            <input type="text" className="field" value={fg} onChange={this.handleFgChange} placeholder="Finishing FG. i.e. 1.008"></input>
                            <div className="calculator-btn-container">
                                <CalculateButton/>
                                <ClearButton/>
                            </div>

                    </div>
                </div>

                {/* Standard Drink output */}
                <div className="calculator-container">
                    <div className="col-12">
                        <h3 className="calculator-std-title">Standard Drink by Volumes</h3>
                    </div>
                    <div className="col-12">
                        <table className="calculator-std-table" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Bottle Size</th>
                                    <th>Standard Drinks (NZ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>330ml</td>
                                    <td className="t-align-right">{formOutStd330} std</td>
                                </tr>
                                <tr>
                                    <td>750ml</td>
                                    <td className="t-align-right">{formOutStd750} std</td>
                                </tr>
                                <tr>
                                    <td>1.25L</td>
                                    <td className="t-align-right">{formOutStd1250} std</td>
                                </tr>
                                <tr>
                                    <td>2L</td>
                                    <td className="t-align-right">{formOutStd2000} std</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        )
    }
}

export default ABVCalculator
