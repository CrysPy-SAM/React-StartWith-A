import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return <center><div>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
  </div> </center>
}

export default App
