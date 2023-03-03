import sortArrayByDate from 'utils/sortArrayByDate'

const useEditAppointment = ({ appointments, selectedAppointment, setAppointments, updatedAppointment }) => {
  const updatedAppointments = appointments.map((appointment) => {
    return appointment.id === selectedAppointment.id ? updatedAppointment : appointment
  })

  const sortedArrayByDate = sortArrayByDate(updatedAppointments)

  setAppointments(sortedArrayByDate)
}

export default useEditAppointment
