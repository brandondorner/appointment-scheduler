import './index.css'
import NoAppointmentsView from 'components/Appointments/NoAppointmentsView'
import { AppointmentsContext } from 'context/AppointmentsContext'
import { useCallback, useContext } from 'react'
import AddAppointmentButton from 'components/Appointments/AddAppointmentButton'
import AppointmentForm from 'components/Appointments/AppointmentForm/AppointmentForm'
import { ReactComponent as TrashIcon } from 'assets/trash-icon.svg'
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg'
import DeleteAppointmentModal from 'components/Appointments/DeleteAppointmentModal'

const Appointments = () => {
  const {
    appointments,
    isDeleteModalOpen,
    isFormOpen,
    setFormMode,
    setIsDeleteModalOpen,
    setIsFormOpen,
    setSelectedAppointment
  } = useContext(AppointmentsContext)

  const onDeleteAppointment = useCallback(
    (selectedAppointment) => {
      setSelectedAppointment(selectedAppointment)
      setIsDeleteModalOpen(true)
    },
    [setSelectedAppointment]
  )

  const onEditAppointment = useCallback((appointment) => {
    setFormMode('edit')
    setIsFormOpen(true)
    setSelectedAppointment(appointment)
  }, [])

  return (
    <div>
      {appointments.length ? (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th className="width-50">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr className="appointments-table-body-row" key={appointment.id}>
                <th>{appointment.description}</th>
                <th>{appointment.location}</th>
                <th>{appointment.date}</th>
                <th>{appointment.time}</th>
                <th className="actions-column">
                  <EditIcon onClick={() => onEditAppointment(appointment)} />
                  <TrashIcon onClick={() => onDeleteAppointment(appointment)} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NoAppointmentsView />
      )}
      <AddAppointmentButton />
      {isFormOpen && <AppointmentForm />}
      {isDeleteModalOpen && <DeleteAppointmentModal />}
    </div>
  )
}

export default Appointments
