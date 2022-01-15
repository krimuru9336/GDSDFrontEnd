import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
<<<<<<< HEAD
import Navbar from './Navbar/FuldemyNavbar';
=======
import Navbar from './Navbar/Navbar';
>>>>>>> 0ae55ebbbd570fec75be45224fd09b9027efe5b6
import AddTutor from './components/Tutor/AddTutor';
import DeleteTutor from './components/Tutor/DeleteTutor';
import GetByIdTutor from './components/Tutor/GetById';
import UpdateTutor from './components/Tutor/Update';
import GetAll from './components/Tutor/GetAll';
import Home from './Home/Home';
<<<<<<< HEAD
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TutorDetail from './components/TutorDetail/TutorDetail';
import TutorForm from './components/Tutor/TutorForm.js/TutorForm';
import ChatBody from "./components/chat/components/chatBody/ChatBody";
import React from 'react';
import { useLocation } from "react-router-dom"

function App() {

  return (
    <div className="App">
<BrowserRouter>
<Navbar/>

      
    <Routes>
       <Route path="/" element={<Home />} />
=======


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
>>>>>>> 0ae55ebbbd570fec75be45224fd09b9027efe5b6
      <Route path="/add-tutor" element={<AddTutor />} />
      <Route path="/delete" element={<DeleteTutor />} />
      <Route path="/get-by-id" element={<GetByIdTutor />} />
      <Route path="/update" element={<UpdateTutor />} />
      <Route path="/update/:id" element={<UpdateTutor />} />
<<<<<<< HEAD
      <Route path="/get-all" element={<GetAll />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tutor-detail" element={<TutorDetail />} />
      <Route path="/tutor-profile-create" element={<TutorForm />} />
      <Route path="/messages" element={<ChatBody />} />
    </Routes>
   
=======
      <Route path="/get-all" element={<GetAll />} />
    </Routes>
    </div>
      </div>
      <h6>Fulda University of Applied Sciences Software Engineering Project, Fall 2021 For
Demonstration Only</h6>
>>>>>>> 0ae55ebbbd570fec75be45224fd09b9027efe5b6
  </BrowserRouter>

      
     
         
        
    </div>
<<<<<<< HEAD
=======
    
>>>>>>> 0ae55ebbbd570fec75be45224fd09b9027efe5b6
  );
}

export default App;
