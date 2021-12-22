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
import GetAll from './components/Tutor/GetAll';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<h6>Fulda University of Applied Sciences Software Engineering Project, Fall 2021 For
Demonstration Only</h6>
<Navbar />

      <div className="mt-5 container">
        <div className="card p-5">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-tutor" element={<AddTutor />} />
      <Route path="/delete" element={<DeleteTutor />} />
      <Route path="/get-by-id" element={<GetByIdTutor />} />
      <Route path="/update" element={<UpdateTutor />} />
      <Route path="/update/:id" element={<UpdateTutor />} />
      <Route path="/get-all" element={<GetAll />} />
    </Routes>
    </div>
      </div>
      <h6>Fulda University of Applied Sciences Software Engineering Project, Fall 2021 For
Demonstration Only</h6>
  </BrowserRouter>

      
     
         
        
    </div>
    
  );
}

export default App;
