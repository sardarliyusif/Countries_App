import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import { Loader } from '../Loader'
import './style.scss'

export const Countries = ({ region , name }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  console.log("props",name);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setData(response.data)
      setIsLoading(false)
    })
  }, [])


    return (
    <div>
      <div className="container cards">
        {isLoading ? <Loader /> : 
        data
        .filter(x => {
          if(region == 'All'){
            return x 
          }else if(x.region == region){
            return x.region
          }
        })
        .filter(x => {
          console.log("yourname",name);
          if(name == ''){
            console.log(x.name.common);
            console.log("data gelem",name);
            return x
          }else if(x.name.common.toLowerCase().includes(name.toLowerCase())){
           
            return x.name.common
          }
        })
        .map((x, index) => <Card key={index} name={x.name.common} flag={x.flags.png} region={x.region} population={x.population} />)}
      </div>
    </div>
  )
}
