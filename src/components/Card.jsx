import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PizzasContext } from '../context/PizzasProvider'

const Card = () => {
  const { pizzas, addToCart } = useContext(PizzasContext)
  const navigate = useNavigate()

  const formatNumber = (number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency:'CLP' }).format(number)
  }

  return (
    <>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className='col'>
          <div className='card'>
            <img className='card-img-top' src={pizza.img} alt='' />
          </div>
          <div className='card-body'>
            <h4 className='card-title text-capitalize pt-3'>Pizza {pizza.name}</h4>
            <hr />
            <p className='card-text'>Ingredientes:</p>
            <ul>
              {pizza.ingredients.map((ingredient, i) => (
                <li className='pizza-li' key={i}>🍕 {ingredient}</li>
              ))}
            </ul>
          </div>
          <h2 className='text-center text-dark pb-3'>Precio: {formatNumber(pizza.price)}</h2>
          <div className='d-flex justify-content-center mb-4'>
            <button className='btn btn-info text-white mx-2' onClick={() => navigate(`/pizzas/${pizza.id}`)}>Ver más</button>
            <button className='btn btn-danger mx-2' onClick={() => addToCart(pizza)}>Añadir</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
