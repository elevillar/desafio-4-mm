import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'

import Detalle from './layout/Detalle'
import DetallePedido from './layout/DetallePedido'
import Home from './layout/Home'
import NotFound from './layout/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/pizzas/:id' element={<Detalle />} />
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<DetallePedido />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
