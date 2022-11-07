import { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [checkOutItem, setCheckOutItem] = useState([]);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const [alert, setAlert] = useState({show: false, type: '',message: '', timeout: 3000 })
  const [loading, setLoading] = useState(false)
  
  return (
    <Context.Provider
      value={{
        checkOutItem,
        setCheckOutItem,
        alert,
        setAlert,
        cartItemQuantity,
        setCartItemQuantity,
        setLoading,
        loading
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
