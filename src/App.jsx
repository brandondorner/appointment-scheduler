import './App.css'
import { ApointmentsContextProvider } from 'context/AppointmentsContext'
import Appointments from 'components/Appointments/Appointments'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Schedule An Appointment</header>
      <ApointmentsContextProvider>
        <Appointments />
      </ApointmentsContextProvider>
    </div>
  )
}

export default App
