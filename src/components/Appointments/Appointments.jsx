import './index.css'
import NoAppointmentsView from 'components/Appointments/NoAppointmentsView'
import { AppointmentsContext } from 'context/AppointmentsContext'
import { useContext } from 'react'
import AddAppointmentButton from 'components/Appointments/AddAppointmentButton'
import AppointmentForm from 'components/Appointments/AppointmentForm/AppointmentForm'

const Appointments = () => {
  const { appointments, isFormOpen } = useContext(AppointmentsContext)

  return (
    <div>
      {appointments.length ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Location</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr className="appointments-table-body-row" key={appointment.id}>
                <th>{appointment.date}</th>
                <th>{appointment.description}</th>
                <th>{appointment.location}</th>
                <th>{appointment.time}</th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NoAppointmentsView />
      )}
      <AddAppointmentButton />
      {isFormOpen && <AppointmentForm />}
    </div>
  )
}

export default Appointments
