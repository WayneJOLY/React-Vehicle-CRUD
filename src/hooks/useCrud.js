import axios from 'axios'
import  { useState } from 'react'

const useCrud = (baseUrl) => {
 const [apiData,setApiData]= useState()

 const getApiData=(path)=>{
    axios.get(`${baseUrl}${path}`)
    .then(res=> setApiData(res.data))
    .catch(error=> console.log(error))
 }

 const postApiData=(path,data)=>{
    axios.post(`${baseUrl}${path}`,data)
    .then(setApiData([...apiData,data]))
    .catch(error=> console.log(error))
 }
 const deleteApiData=(path,id)=>{
   axios.delete(`${baseUrl}${path}/${id}/`)
   .then(() =>{
      setApiData(apiData.filter(element =>element.id != id))
   })
   .catch(error=> console.log(error))
 }
const updateApiData=(path,id,data)=>{
   axios.put(`${baseUrl}${path}/${id}/`,data)
   .then(res => setApiData(apiData.map(element=> element.id != id ? element : res.data)))
   .catch(error=> console.log(error))
}
 return [apiData,getApiData,postApiData,deleteApiData,updateApiData];
}

export default useCrud;