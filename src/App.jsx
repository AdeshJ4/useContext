import React, { useState, useEffect } from 'react';
import Item from './components/Item';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className='App'>
      <Item name="Apple" price={12} />
      <Item name="Banana" price={14} />
      <Item name="Cherry" price={16} />
      <Cart />
    </div>
  )
}


export default App; 