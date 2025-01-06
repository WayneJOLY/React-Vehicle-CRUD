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
    axios.post(`${baseUrl}${path}`,data)
    .then(setApi([...apiData,data]))
    .catch(error=> console.log(error))
 }
 const deleteApi=(path,id)=>{
   axios.delete(`${baseUrl}${path}/${id}/`)
   .then(() =>{
      setApi(apiData.filter(element =>element.id != id))
   })
   .catch(error=> console.log(error))
 }

 return [apiData,getApi,postApi,deleteApi];
}

export default useCrud
