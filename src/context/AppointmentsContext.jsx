import { useState, createContext } from 'react'

export const AppointmentsContext = createContext()

export const ApointmentsContextProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [formMode, setFormMode] = useState('')
  const [selectedAppointment, setSelectedAppointment] = useState({})

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        isDeleteModalOpen,
        isFormOpen,
        formMode,
        selectedAppointment,
        setAppointments,
        setIsDeleteModalOpen,
        setIsFormOpen,
        setFormMode,
        setSelectedAppointment
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}
