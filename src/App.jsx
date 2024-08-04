
import './App.css'

function App() {
  const attendees = [
    { name: 'Mohamed', attendance: true },
    { name: 'Ali', attendance: true },
    { name: 'Ahmed', attendance: false },
  ];



  const attendeesList = attendees.map((atendee, index) => (
    <li key={index} className={atendee.attendance ? 'attendance' : 'not-attendance'}>
      {atendee.name}
    </li>
  ))
      
    return (
      <>
        <h1>attendees List</h1>

        {attendeesList}
      </>
    );
  }

export default App