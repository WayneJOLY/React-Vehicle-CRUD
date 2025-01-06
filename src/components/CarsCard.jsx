import '../App.css'
const CarsCard = ({car,deleteCar,setUpdateCar}) => {
  const handleDelete=()=>{
      deleteCar('/cars',car.id)
  }

  const handleUpdate=()=>{
    setUpdateCar(car)
  }
  
  return (
    <figure className="card">
                <img src={car.image} alt="" />
        <figcaption className='cards'>
                <h3>{car.brand} {car.model}</h3>
                <ul>
                    <li><span>Color: </span><span>{car.color}</span></li>
                    <li><span>Year: </span><span>{car.year}</span></li>
                    <li><span>Price: $</span><span>{car.price}</span></li>
                </ul>
                <button onClick={handleUpdate} className='updatebtn'>Update</button>
                <button onClick={handleDelete} className='deleteBtn'>Delete</button>
    </figcaption>
    </figure>
  )
}

export default CarsCard



