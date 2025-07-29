import { useState } from "react";
import { TicketsContext } from "./TicketsContext";

export const TicketsProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (customer, order) => {
    setOrders(prev => [...prev, { customer, order }]);
  }

  return (
    <TicketsContext.Provider value={{ orders, setOrders, addOrder }}>
      {children}
    </TicketsContext.Provider>
  )
}