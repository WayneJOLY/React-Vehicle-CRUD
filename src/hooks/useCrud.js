import axios from 'axios'
import  { useState } from 'react'

const useCrud = (baseUrl) => {
 const [apiData,setApi]= useState()

 const getApi=(path)=>{
    axios.get(`${baseUrl}${path}`)
    .then(res=> setApi(res.data))
    .catch(error=> console.log(error))
 }

 const postApi=(path,data)=>{
    axios.post(`${baseUrl}${path}`)
    .then(setApi([...apiData,data]))
    .catch(error=> console.log(error))
 }

 return [apiData,getApi,postApi];
}

export default useCrud
