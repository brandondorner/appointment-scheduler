const useDeleteAppointment = ({ appointments, id, setAppointments }) => {
  const updatedAppointments = appointments.filter((appointment) => appointment.id !== id)
  setAppointments(updatedAppointments)
}

export default useDeleteAppointment
