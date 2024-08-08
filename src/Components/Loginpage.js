import {React,props} from 'react'
import LoginButton from './LoginButton'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
export default function Loginpage() {

  const { user, isAuthenticated, isLoading  } = useAuth0();
  
  return (
    <div>
     {
      //  isAuthenticated ? this.handleRedirect() :
     console.log(isAuthenticated)
     
     }
      <LoginButton/>
    </div>
  )
}
