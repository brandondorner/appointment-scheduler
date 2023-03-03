import './index.css'
import Modal from 'components/Modal/Modal'
import { AppointmentsContext } from 'context/AppointmentsContext'
import { useCallback, useContext, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useCreateAppointments from 'components/Appointments/hooks/useCreateAppointment'

const APPOINTMENT_LOCATION_OPTIONS = ['London', 'Orlando', 'Portland', 'San Diego', 'Seattle']

const AppointmentForm = () => {
  const { appointments, selectedAppointment, setAppointments, setIsFormOpen } = useContext(AppointmentsContext)
  const [date, setDate] = useState(selectedAppointment.date || '')
  const [description, setDescription] = useState(selectedAppointment.description || '')
  const [location, setLocation] = useState(selectedAppointment.location || '')
  const [time, setTime] = useState(selectedAppointment.time || '')
  const currentDate = new Date()

  const newAppointment = useMemo(() => {
    return {
      date,
      description,
      id: uuidv4(),
      location,
      time
    }
  }, [date, description, location, time])

  const onNewAppointment = useCallback(() => {
    useCreateAppointments({ appointments, newAppointment, setAppointments })
  }, [appointments, newAppointment, setAppointments])

  return (
    <Modal onClose={setIsFormOpen}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          onNewAppointment()
          setIsFormOpen(false)
        }}
      >
        <div className="appt-form-container">
          <b>Add Appointment</b>
          <label>Description:</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter Description"
            required
            value={description}
            type="text"
          />
          <label>Location</label>
          <select onChange={(event) => setLocation(event.target.value)} required value={location}>
            <option>Select Location</option>
            {APPOINTMENT_LOCATION_OPTIONS.map((option) => (
              <option key={`location-${option}`} value={option}>
                {option}
              </option>
            ))}
          </select>
          <label>Date and Time</label>
          <input
            min={currentDate.toLocaleDateString('en-CA')}
            required
            onChange={(event) => setDate(event.target.value)}
            type="date"
            value={date}
          />
          <label>Time</label>
          <input
            min={new Date().toLocaleTimeString('fr', { hour: '2-digit', minute: '2-digit' })}
            onChange={(event) => setTime(event.target.value)}
            required
            type="time"
            value={time}
          />
          <button className="modal-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AppointmentForm
