import '../App.css'
const CarsCard = ({car}) => {
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
    </figcaption>
    </figure>
  )
}

export default CarsCard



