import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Coke', size: '1000ml', price: 45, quantity: 1 },
    { id: 2, name: 'Coke', size: '1500ml',  price: 60, quantity: 1 },
    { id: 3, name: 'Sprite', size: '1000ml',  price: 45, quantity: 1 },
    { id: 4, name: 'Sprite', size: '1500ml', price: 60, quantity: 1 },
    { id: 5, name: 'Royal', size: '1000ml',  price: 45, quantity: 1 },
    { id: 6, name: 'Royal', size: '1500ml',  price: 60, quantity: 1 },
  ]);

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    const alreadyInCart = cart.find((item) => item.id === productId);

    if (productToAdd && !alreadyInCart) {
      setCart([...cart, { ...productToAdd }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='mt-8'>
      <h1 className='font-bold text-3xl'>Shopping Cart</h1>
      <div className='border border-black border-solid mt-4 py-4 px-8'>
        <h2 className='text-2xl font-bold mb-2'>Products</h2>
        <ul>
          {products.map((product) => (
            <li className='list-none' key={product.id}>
              {product.name} - ₱{product.price} &ensp;&ensp;&ensp;&ensp;
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-4'>
        <h2 className='text-3xl font-bold'>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Quantity:
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3 className='text-2xl'>Total: <span className='font-bold'> ${calculateTotal()}</span></h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
