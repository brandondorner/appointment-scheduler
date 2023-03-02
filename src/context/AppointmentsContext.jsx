import { useState, createContext } from 'react'

export const AppointmentsContext = createContext()

export const ApointmentsContextProvider = ({ children }) => {
  const [appointments, setAppointments] = useState()

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>{children}</AppointmentsContext.Provider>
  )
}
