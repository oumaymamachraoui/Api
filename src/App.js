import './App.css';
import Navigation from './components/Navigation';
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/user/:id" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
