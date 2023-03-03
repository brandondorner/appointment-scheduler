import sortArrayByDate from 'utils/sortArrayByDate'
import sortArrayByTime from 'utils/sortArrayByTime'

// Normally this would be a POST call but since this demo only requires local, unpersisted state
// we can mimic it instead
const useCreateAppointments = ({ appointments, newAppointment, setAppointments }) => {
  const updatedAppointmentList = appointments ? [...appointments, newAppointment] : [newAppointment]

  const sortedArrayByDate = sortArrayByDate(updatedAppointmentList)
  const sortedArrayByTime = sortArrayByTime(sortedArrayByDate)

  setAppointments(sortedArrayByTime)
}

export default useCreateAppointments
