import { AppointmentsContext } from 'context/AppointmentsContext'
import { useContext } from 'react'

const AddAppointmentButton = () => {
  const { setIsFormOpen } = useContext(AppointmentsContext)

  return (
    <div>
      <button onClick={() => setIsFormOpen(true)}>Add Appointment</button>
    </div>
  )
}

export default AddAppointmentButton
