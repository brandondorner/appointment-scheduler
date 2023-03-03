import { AppointmentsContext } from 'context/AppointmentsContext'
import { useCallback, useContext } from 'react'

const AddAppointmentButton = () => {
  const { setFormMode, setIsFormOpen, setSelectedAppointment } = useContext(AppointmentsContext)

  const onAdd = useCallback(() => {
    setFormMode('create')
    setIsFormOpen(true)
    setSelectedAppointment({})
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          onAdd()
        }}
      >
        Add Appointment
      </button>
    </div>
  )
}

export default AddAppointmentButton
