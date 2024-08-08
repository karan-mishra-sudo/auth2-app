import "./App.css";
import Mainapp from "./Components/Mainapp";
import { BrowserRouter as Router, Routes, Route ,useNavigate} from "react-router-dom";
import { useAuth0  } from "@auth0/auth0-react";
import Start from "./Components/Start";


function App() {
  const { loginWithRedirect,isAuthenticated ,user  } = useAuth0();
  function isvalid(){
    if(user)
    {
      return user.email_verified===true 
    }
  }
  console.log("veryfy => ",isvalid())
  return (
    <Router>
      {
          isvalid() ?  <Mainapp/> :  <Start/> 
      }
    </Router>
  );
}

export default App;
