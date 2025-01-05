import { useEffect } from 'react'
import './App.css'
import CarsCard from './components/CarsCard.jsx'
import CarForm from './components/CarForm.jsx'
import useCrud from './hooks/useCrud.js'

const App = () => {
  const urlbase="http://localhost:8080/api/v1/"
  const [cars,getCar,addCar]=useCrud(urlbase)

  useEffect(() => {
  getCar("cars/")
  }, [])
  

  return (
    <main>
      <CarForm
      addCar={addCar}/>
      {
        cars?.map((car,index)=>(
          <CarsCard
          key={index}
          car={car}
          />
        ))
      }
    </main>
  )
}

export default App
