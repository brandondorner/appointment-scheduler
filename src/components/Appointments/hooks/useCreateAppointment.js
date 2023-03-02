import { v4 as uuidv4 } from 'uuid'

// Normally this would be a POST call but since this demo only requires local, unpersisted state
// we can mimic it instead
const useCreateAppointments = ({ appointments, setAppointments }) => {
  const currentDate = new Date()

  const newAppointment = {
    date: currentDate.toLocaleDateString(),
    description: 'Appointment Description',
    id: uuidv4(),
    location: 'Orlando',
    time: currentDate.toLocaleTimeString()
  }

  const updatedAppointmentList = appointments ? [...appointments, newAppointment] : [newAppointment]

  setAppointments([...updatedAppointmentList])
}

export default useCreateAppointments
