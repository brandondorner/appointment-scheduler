// Normally this would be a POST call but since this demo only requires local, unpersisted state
// we can mimic it instead
const useCreateAppointments = ({ appointments, newAppointment, setAppointments }) => {
  const updatedAppointmentList = appointments ? [...appointments, newAppointment] : [newAppointment]

  setAppointments([...updatedAppointmentList])
}

export default useCreateAppointments
