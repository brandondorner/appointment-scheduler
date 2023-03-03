import sortArrayByDate from 'utils/sortArrayByDate'
import sortArrayByTime from 'utils/sortArrayByTime'

const useEditAppointment = ({ appointments, selectedAppointment, setAppointments, updatedAppointment }) => {
  const updatedAppointments = appointments.map((appointment) => {
    return appointment.id === selectedAppointment.id ? updatedAppointment : appointment
  })

  const sortedArrayByDate = sortArrayByDate(updatedAppointments)
  const sortedArrayByTime = sortArrayByTime(sortedArrayByDate)

  setAppointments(sortedArrayByTime)
}

export default useEditAppointment
