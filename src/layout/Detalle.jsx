import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PizzasContext } from '../context/PizzasProvider'

const Detalle = () => {
  const [pizzaDetail, setPizzaDetail] = useState({})
  const { pizzas, addToCart } = useContext(PizzasContext)
  const { id } = useParams()

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id)
    setPizzaDetail(datosPizza || {})
  }

  useEffect(() => {
    obtenerDatos()
  }, [pizzas])

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='card mb-3 estilos'>
          <div className='row g-0'>
            <div className='col-md-6'>
              <img src={pizzaDetail.img} className='img-fluid estilos rounded-start' alt={pizzaDetail.name} />
            </div>
            <div className='col-md-6'>
              <div className='card-body'>
                <h5 className='card-title text-capitalize pt-3'>
                  {pizzaDetail.name}
                </h5>
                <p className='card-text'>{pizzaDetail.desc}</p>
                <ul>
                  {pizzaDetail.ingredients?.map((ingredient, i) => {
                    <li key={{ i }}>{ingredient}</li>
                  })}
                </ul>
                <div className='d-flex justify-content-start pt-3'>
                  <h4>Precio: <strong>${pizzaDetail.price}</strong></h4>
                </div>
                <div className='d-flex justify-content-start pt-3'>
                  <button className='btn btn-danger' onClick={() => addToCart(pizzaDetail)}>Añadir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detalle
