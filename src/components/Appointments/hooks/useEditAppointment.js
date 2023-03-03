const useEditAppointment = ({ appointments, selectedAppointment, setAppointments, updatedAppointment }) => {
  const updatedAppointments = appointments.map((appointment) => {
    return appointment.id === selectedAppointment.id ? updatedAppointment : appointment
  })

  setAppointments(updatedAppointments)
}

export default useEditAppointment
