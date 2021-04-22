import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Calendar from './components/Calendar/Calendar_Page';
import Home from './components/Home/Home';
import NotePad from "./components/Notes/NotePad";
import ToDo from './components/ToDo'

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path='/complete_app' component={Home} exact/>
        <Route path='/complete_app/Tasks' component={ToDo} />
        <Route path='/complete_app/notes' component={NotePad} />
        <Route path='/complete_app/calendar' component={Calendar} />
      </Switch>
    </Router>
  );
}

export default App;
