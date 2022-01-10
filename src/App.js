import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar/FuldemyNavbar';
import AddTutor from './components/Tutor/AddTutor';
import DeleteTutor from './components/Tutor/DeleteTutor';
import GetByIdTutor from './components/Tutor/GetById';
import UpdateTutor from './components/Tutor/Update';
import GetAll from './components/Tutor/GetAll';
import Home from './Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TutorDetail from './components/TutorDetail/TutorDetail';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar />

      
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/add-tutor" element={<AddTutor />} />
      <Route path="/delete" element={<DeleteTutor />} />
      <Route path="/get-by-id" element={<GetByIdTutor />} />
      <Route path="/update" element={<UpdateTutor />} />
      <Route path="/update/:id" element={<UpdateTutor />} />
      <Route path="/get-all" element={<GetAll />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tutor-detail" element={<TutorDetail />} />
    </Routes>
   
  </BrowserRouter>

      
     
         
        
    </div>
  );
}

export default App;
