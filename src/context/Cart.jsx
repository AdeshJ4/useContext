import React, { useState, createContext } from "react";

export const cartContext = createContext(null);

export const cartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <cartContext.Provider value={{ items, setItems }}>
      {children}
    </cartContext.Provider>
  );
};
