// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import ResourceForm from './components/ResourceForm';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events/new" element={<EventForm />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/resources/new" element={<ResourceForm />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
