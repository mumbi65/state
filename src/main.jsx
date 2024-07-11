import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Reducer from './components/reducer.jsx'
import User from './components/user.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserForm from './components/userform.jsx'
import StudentForm from './components/studentform.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentForm/>
  </React.StrictMode>,
)
