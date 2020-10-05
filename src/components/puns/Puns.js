import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Puns = () => {

    const [punSetup, setPunSetup] = useState('')
    const [punDeliver, setPunDelivery] = useState('')
    const [fetching, setfetching] = useState(false)

    useEffect(() => {
       const fetchData = async() => {
            const result = await axios(
                `https://sv443.net/jokeapi/v2/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist`
            )
            console.log(result.data)
            setPunSetup(`${result.data.setup}`)
            setPunDelivery(`${result.data.delivery}`)
        } 
        fetchData()
    },[fetching])
    

    return(
        <div>
            <p>{punSetup}</p>
            <p>{punDeliver}</p>
        </div>
    )
}

export default Puns

// https://sv443.net/jokeapi/v2/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist
