import React, { Component } from 'react'
import Modal from '../layout/PunModal'

class PointlessButton extends Component {
    
    state = {show: false}

    showModal = () => {
        this.setState({show: true})
        document.body.style.overflow = 'hidden'
    }
    hideModal = () => {
        this.setState({show: false})
        document.body.style.overflow = 'unset' 
    }
    
    render(){
        return (
            <>
                <Modal show={this.state.show} handleClose={this.hideModal} heading={`Here's a Pun`}/>
                <button className="btn btn-animation btn-tertiary" type="button" onClick={this.showModal}>
                    Pointless Button
                </button>
            </>
        )
    }
}

const container = document.createElement('div')
document.body.appendChild(container)

export default PointlessButton
