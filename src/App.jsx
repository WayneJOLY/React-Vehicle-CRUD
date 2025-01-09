import { useEffect, useState } from 'react'
import './App.css'
import CarsCard from './components/CarsCard.jsx'
import CarForm from './components/CarForm.jsx'
import useCrud from './hooks/useCrud.js'

const App = () => {
  const urlbase="http://localhost:8080/api/v1/"
  const [cars,getCar,addCar,deleteCar,modifyCAr]=useCrud(urlbase)
  const [updateCar,setUpdateCar]=useState()

  useEffect(() => {
  getCar("cars/")
  }, [])
  

  return (
    <main>
      <CarForm
      addCar={addCar}
      updateCar={updateCar}
      modifyCAr={modifyCAr}/>
      <div className="cars-container">
      {
        cars?.map((car,index)=>(
          <CarsCard
          key={index}
          car={car}
          deleteCar={deleteCar}
          setUpdateCar={setUpdateCar}
          />
        ))
      }
      </div>
    </main>
  )
}

export default App
