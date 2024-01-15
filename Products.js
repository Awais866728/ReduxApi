import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/esm/CardFooter';
import { fetchProducts } from "../store/productSlice";  
import { add } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
        </CardFooter>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Products;
