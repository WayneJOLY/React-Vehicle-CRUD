import React from 'react'
import { useForm } from 'react-hook-form'

const CarForm = ({addCar}) => {

 const{register,handleSubmit } =useForm()


 const submit=(data)=>{
    addCar("cars/",data)
 }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Card Form</h2>
        <label htmlFor="brand">Brand</label>
        <input type="text" id='brand' {...register('brand')}/>
        
        <label htmlFor="model">model</label>
        <input type="text" id='model'{...register('model')}/>
        
        <label htmlFor="color">color</label>
        <input type="text" id='color'{...register('color')}/>
        
        <label htmlFor="price">price</label>
        <input type="text" id='price' {...register('price')}/>
        
        <label htmlFor="image">image</label>
        <input type="text" id='image'{...register('image')}/>
        <button>submit</button>
    </form>
  )
}

export default CarForm
