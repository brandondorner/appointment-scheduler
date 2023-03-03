import { useState, createContext } from 'react'

export const AppointmentsContext = createContext()

export const ApointmentsContextProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(false)

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        isDeleteModalOpen,
        isFormOpen,
        selectedAppointment,
        setAppointments,
        setIsDeleteModalOpen,
        setIsFormOpen,
        setSelectedAppointment
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}
