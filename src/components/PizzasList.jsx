import { Container, Row } from 'react-bootstrap'

const PizzasList = ({ children }) => {
  return (
    <Container className='my-4'>
      <Row className='row-cols-1 row-cols-md-3 g-4'>
        {children}
      </Row>
    </Container>
  )
}

export default PizzasList
