import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Appointment from './Component/Appointment/Appointment/Appointment';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import LogIn from './Component/LogIn/LogIn';
import Appointments from './Component/Dashboard/Appointments/Appointments';
import AddDoctor from './Component/Dashboard/AddDoctor/AddDoctor';
import NoMatch from './Component/Shared/NoMatch/NoMatch'
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path='/'><Home /></Route>
         <Route path='/appointment'><Appointment /></Route>
         <Route path='/dashboard'><Dashboard /></Route>
         <Route path='/appointments'><Appointments /></Route>
         <Route path='/addDoctor'><AddDoctor /></Route>
         {/* <Route path="/login"><LogIn /></Route> */}
         <Route path='*'><NoMatch /></Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
