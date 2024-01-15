import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/esm/CardFooter';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const cartItems = useSelector((state) => state.cart);

  const cards = cartItems.map((product) => (
    <div className="col-md-12" key={product.id}>
      <Card className='h-100' style={{ width: '18rem' }}>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          Price: Rs{product.price}
        </Card.Body>
        <CardFooter>
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from cart</Button>
        </CardFooter>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Cart</h1>
      <div>{cards}</div>
    </>
  );
};

export default Cart;
