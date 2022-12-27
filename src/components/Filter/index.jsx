import React from 'react'
import './style.scss'

export const Filter = ({setRegion, setName}) => {
    return (
        <div className="filter">
            <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)}/>
            <select onChange={e => setRegion(e.target.value)} name="regions" id="regions">
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}
