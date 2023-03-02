import './index.css'
import useGetAppointments from './hooks/useGetAppointments'
import NoAppointmentsView from 'components/Appointments/NoAppointmentsView'

const Appointments = () => {
  const { appointments, setAppointments } = useGetAppointments()

  return appointments ? (
    <div>
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
              <th>{appointment.desciption}</th>
              <th>{appointment.location}</th>
              <th>{appointment.time}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <NoAppointmentsView />
  )
}

export default Appointments
