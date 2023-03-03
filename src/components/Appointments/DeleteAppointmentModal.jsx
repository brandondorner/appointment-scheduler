import Modal from 'components/Modal/Modal'
import { AppointmentsContext } from 'context/AppointmentsContext'
import { useCallback, useContext } from 'react'
import useDeleteAppointment from 'components/Appointments/hooks/useDeleteAppointment'

const DeleteAppointmentModal = () => {
  const { appointments, selectedAppointment, setAppointments, setIsDeleteModalOpen } = useContext(AppointmentsContext)

  const onDelete = useCallback(() => {
    useDeleteAppointment({ appointments, id: selectedAppointment.id, setAppointments })
    setIsDeleteModalOpen(false)
  }, [appointments, setAppointments])

  return (
    <Modal onClose={setIsDeleteModalOpen}>
      <p>Are you sure you want to delete this appointment?</p>
      <button className="modal-button" onClick={onDelete}>
        Confirm
      </button>
    </Modal>
  )
}

export default DeleteAppointmentModal
