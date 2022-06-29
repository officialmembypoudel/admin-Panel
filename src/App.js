import './App.css';
import './Components/Css/SideNav.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Sales from './Components/Pages/Sales';
import ErrPage from './Components/Pages/404_Page';
import Users from './Components/Pages/Users';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import DashBoard from './Components/Pages/SideDashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/users' element={<Users />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<ErrPage />} />
      </Routes>
    </Router>



    // <div className="App">
    //   <TopNav />
    //   <div className='container'>
    //     <SideNav />
    //     <SideDash />
    //   </div>
    // </div>
  );
}

export default App;
