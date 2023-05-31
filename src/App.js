import logo from './logo.svg';
import './App.css';
import axios from "axios";
import User from "./pages/UserListing";
import { useEffect,useState} from "react";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <ul>
        <li>
          <a href={`/users`}>User Listing</a>
        </li>
        <li>
          <a href={`/facts`}>Fact Listing</a>
        </li>
      </ul>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
