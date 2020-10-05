import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PunModal = ({ handleClose, show, heading }) => {
    const showHideClassName = show ? "modal modal-display" : "modal modal-hide"

    const [punSetup, setPunSetup] = useState('')
    const [punDeliver, setPunDelivery] = useState('')
    const [loading, setLoading] = useState(true)
    const [fetching, setfetching] = useState(false)

    useEffect(() => {
       const fetchData = async() => {
           setLoading(true)
            const result = await axios(
                `https://sv443.net/jokeapi/v2/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist`
            )
            setPunSetup(`${result.data.setup}`)
            setPunDelivery(`${result.data.delivery}`)
            setLoading(false)
        } 
        fetchData()
    },[fetching])
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
            <div className="modal-header">
              <div className="modal-header-title">
                <h3>{heading}</h3>
              </div>
              <div className="modal-header-close">
                <button className="btn-close" onClick={handleClose}>X</button>
              </div>
            </div>
            <div className="modal-body">
            <>
                {loading ? (
                    <p>loading...</p>
                ) : (
                    <>
                        <p>{punSetup}</p>
                        <p>{punDeliver}</p>
                    </>
                )}
            </>
            </div>
          <div className="modal-footer">
            <button className="btn btn-lg btn-animation btn-primary" onClick={()=> setfetching(!fetching)}>New Pun</button>
            <button className="btn btn-lg btn-animation btn-secondary mr-1" onClick={handleClose}>Close</button>
          </div>
        </section>
      </div>
    )
}

export default PunModal