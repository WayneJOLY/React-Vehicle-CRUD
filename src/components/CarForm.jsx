import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import '../App'

const CarForm = ({addCar,modifyCar,updateCar}) => {

 const{register,handleSubmit,reset } =useForm()

useEffect(() => {
  reset(updateCar)
}, [updateCar])

 const submit=(data)=>{
  if(updateCar){
    modifyCar("/cars",updateCar.id,data)
  }
  else{
    addCar("/cars",data)
  }

  reset({
    brand:"",
    model:'',
    color:'',
    year:'',
    price:'',
    image:''
  })
 }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Card Form</h2>
        
        <input placeholder='Brand' type="text" id='brand' {...register('brand')} required/>
        
        
        <input placeholder='Model' type="text" id='model'{...register('model')} required/>
        
        
        <input placeholder='Color' type="text" id='color'{...register('color')} required/>

      
        <input placeholder='Year' type="text" id='year'{...register('year')} required/>
        
        
        <input placeholder='Price' type="text" id='price' {...register('price')} required/>
        
        
        <input placeholder='Image' type="text" id='image'{...register('image')} required/>
        <button className='submit'>submit</button>
    </form>
  )
}

export default CarForm
