import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import Dashboard from './Pages/Healthcare/Dashboard/Dashboard';
import { Web3Provider } from './ContextAPI/Web3Context.js';
import BookAppointment from './Pages/Healthcare/BookAppointment/BookAppointment.js';

function App() {
  return (
    <div>
      <Web3Provider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/healthcare" element={<Dashboard />}></Route>
            <Route exact path="/book_appointment" element={<BookAppointment />}></Route>
          </Routes>
        </BrowserRouter>
      </Web3Provider>
    </div>
  );
}

export default App;
