import logo from './logo.svg';
import './App.css';
import axios from "axios";
import User from "./components/User";
import { useEffect,useState} from "react";

const API_URl="http://localhost:3000/api/v1/users"

function getAPIData(){
  return axios.get(API_URl).then((reponse) => reponse.data)
}

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    let mounted =true;
    getAPIData().then((items) => {
      if (mounted) {
        setUsers(items);
      }
    });
    return () => (mounted = false) ;
  },[]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <User user={users}/>
    </div>
  );
}

export default App;
