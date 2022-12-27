import React, { useState } from 'react'
import { Countries } from '../../components/Countries'
import { Filter } from '../../components/Filter'

export const Home = () => {
    const [region, setRegion] = useState('All')
    const [name, setName] = useState('')
    return (
        <div className='container'>
            <h1>Where in the world</h1>
            <Filter setRegion = {setRegion} setName={setName}/>
            <Countries region={region} name={name}/>
        </div>
    )
}
