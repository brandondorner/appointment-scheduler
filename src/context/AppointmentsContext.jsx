import { useState, createContext } from 'react'

export const AppointmentsContext = createContext()

export const ApointmentsContextProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <AppointmentsContext.Provider value={{ appointments, isFormOpen, setAppointments, setIsFormOpen }}>
      {children}
    </AppointmentsContext.Provider>
  )
}
