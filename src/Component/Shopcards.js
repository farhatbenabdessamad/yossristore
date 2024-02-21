import React from 'react'
import Card from 'react-bootstrap/Card';


function Shopcards({x}) {
   /*console.log(x)*/
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={x.image} style={{height:"200px"}}/>
      <Card.Body>
        <Card.Title>{x.name}</Card.Title>
        <Card.Text>
          {x.description}
        </Card.Text>
        <Card.Text>
          Price:{x.price}$
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Shopcards