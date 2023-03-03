import './index.css'
import Modal from 'components/Modal/Modal'
import { AppointmentsContext } from 'context/AppointmentsContext'
import { useCallback, useContext } from 'react'
import useCreateAppointments from 'components/Appointments/hooks/useCreateAppointment'

const AppointmentForm = () => {
  const { appointments, setAppointments, setIsFormOpen } = useContext(AppointmentsContext)

  const onNewAppointment = useCallback(() => {
    useCreateAppointments({ appointments, setAppointments })
  }, [appointments, setAppointments])

  return (
    <Modal>
      <form>
        <div className="appt-form-container">
          <b>Add Appointment</b>
          <button className="form-button" onClick={() => onNewAppointment()}>
            Submit
          </button>
          <button className="form-button" onClick={() => setIsFormOpen(false)}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AppointmentForm
