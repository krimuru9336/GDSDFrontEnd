import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar/FuldemyNavbar';
import Footer from './Footer/Footer';
import Mission from './Footer/Mission';
import Vision from './Footer/Vision';
import AddTutor from './components/Tutor/AddTutor';
import DeleteTutor from './components/Tutor/DeleteTutor';
import GetByIdTutor from './components/Tutor/GetById';
import UpdateTutor from './components/Tutor/Update';
import GetAll from './components/Tutor/GetAll';
import Home from './Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TutorDetail from './components/TutorDetail/TutorDetail';
import TutorForm from './components/Tutor/TutorForm.js/TutorForm';
import ChatBody from "./components/chat/components/chatBody/ChatBody";
import AdminPage from './components/Admin/AdminPage';
import React from 'react';
import { useLocation } from "react-router-dom"
import TutorProfile from './components/TutorProfile/TutorProfile';
import Timetable from './components/TutorDetail/Timetable';
import TimetableEdit from './components/TutorDetail/TimetableEdit';
import TimetableDelete from './components/TutorDetail/TimetableDelete';

function App() {

  return (
    <div className="App">

    <h6>Fulda University of Applied Sciences Software Engineering Project, Fall 2021 For
Demonstration Only</h6>

<BrowserRouter>
      
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
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/timetable-edit" element={<TimetableEdit />} />
      <Route path="/timetable-delete" element={<TimetableDelete  />} />  
      <Route path="/tutor-profile-create" element={<TutorForm />} />
      <Route path="/messages" element={<ChatBody />} />
      <Route path="/my-profile" element={<TutorProfile />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/vision" element={<Vision />} />
    </Routes>
   
  </BrowserRouter>
    
  <div><Footer/></div>
  
    </div>


  );
}

export default App;
