import React, { createContext, useContext, useEffect, useState } from "react";
import { roomData } from "../data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(false)
  const [rooms,setRooms] = useState(roomData)
  const [total,setTotal] = useState(0)
  const [adult,setAdult] = useState('1 Adult')
  const [kids,setKids] = useState('0 Kids')
  useEffect(()=> {
    setTotal(Number(adult[0])+Number(kids[0]))
  })
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const newRooms = rooms.filter((room) => total <= room.maxPerson)
    setTimeout(() => {
    setRooms(newRooms)
    setLoading(false)  
    }, 2000);
  }
  
 
 return <AppContext.Provider value={{rooms,adult,setAdult,kids,setKids,handleSubmit,loading}}>
    {children}
    </AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
