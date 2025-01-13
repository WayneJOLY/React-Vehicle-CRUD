import { useEffect, useState } from 'react'
import './App.css'
import CarsCard from './components/CarsCard.jsx'
import CarForm from './components/CarForm.jsx'
import useCrud from './hooks/useCrud.js'

const App = () => {
  const urlbase="http://localhost:8080/api/v1/"
  const [cars,getCar,addCar,deleteCar,modifyCar]=useCrud(urlbase)
  const [updateCar,setUpdateCar]=useState()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
  getCar("cars/")
  }, [])
  
const handleOpen=()=>{
  setIsOpen(!isOpen)
  console.log(isOpen)
}
  return (
    <main>
      <button onClick={handleOpen}>Add Car</button>
      {isOpen ? (
        <>
          <CarForm
            addCar={addCar}
            updateCar={updateCar}
            modifyCar={modifyCar}
          />
        </>
      ) : null}
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
