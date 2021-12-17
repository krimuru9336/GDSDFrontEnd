import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import AddTutor from './components/Tutor/AddTutor';
import DeleteTutor from './components/Tutor/DeleteTutor';
import GetByIdTutor from './components/Tutor/GetById';
import UpdateTutor from './components/Tutor/Update';


function App() {
  return (
    
    <div className="App">

<BrowserRouter>
<Navbar />
Welcome to Fuldemy
      <div className="mt-5 container">
        <div className="card p-5">
    <Routes>
      <Route path="/" element={<AddTutor />} />
      <Route path="/delete" element={<DeleteTutor />} />
      <Route path="/get-by-id" element={<GetByIdTutor />} />
      <Route path="/update" element={<UpdateTutor />} />
    </Routes>
    </div>
      </div>
  </BrowserRouter>

      
     
         
        
    </div>
  );
}

export default App;
