import React from 'react'
import Item from './components/Item';
import Cart from './components/Cart';

const App = () => {
  const data = [
    { name: 'Apple', price: 10 },
    { name: 'Banana', price: 20 },
    { name: 'Cherry', price: 30 },
    { name: 'Mango', price: 40 },
  ];


  return (
    <div>
      <div className='items'>
        <h1>Items</h1>
        <div className='cart-items'>
          {data.map((d, i) => {
            return <Item key={i} productName={d.name} productPrice={d.price} />
          })}
        </div>
      </div>

      <div className='cart'>
        <Cart />
      </div>
    </div>
  )
}

export default App