import { AppointmentsContext } from 'context/AppointmentsContext'
import { useContext } from 'react'

const AddAppointmentButton = () => {
  const { setFormMode, setIsFormOpen } = useContext(AppointmentsContext)

  return (
    <div>
      <button
        onClick={() => {
          setFormMode('create')
          setIsFormOpen(true)
        }}
      >
        Add Appointment
      </button>
    </div>
  )
}

export default AddAppointmentButton
