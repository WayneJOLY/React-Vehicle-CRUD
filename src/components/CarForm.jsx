import { useForm } from 'react-hook-form'

const CarForm = ({addCar}) => {

 const{register,handleSubmit } =useForm()


 const submit=(data)=>{
    addCar("/cars/",data)
 }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Card Form</h2>
        <label htmlFor="brand">Brand</label>
        <input type="text" id='brand' {...register('brand')} required/>
        
        <label htmlFor="model">model</label>
        <input type="text" id='model'{...register('model')} required/>
        
        <label htmlFor="color">color</label>
        <input type="text" id='color'{...register('color')} required/>

        <label htmlFor="year">year</label>
        <input type="text" id='year'{...register('year')} required/>
        
        <label htmlFor="price">price</label>
        <input type="text" id='price' {...register('price')} required/>
        
        <label htmlFor="image">image</label>
        <input type="text" id='image'{...register('image')} required/>
        <button>submit</button>
    </form>
  )
}

export default CarForm
