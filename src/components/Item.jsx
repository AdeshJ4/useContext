import React, { useState, useEffect } from 'react';

const Item = ({name, price}) => {
    return (
        <div className='item-card'>
            <h4>Item Name: {name}</h4>        
            <h4>Item Price: {price}</h4>

            <button >Add to cart</button>        
        </div>
    )
}


export default Item;