import React from 'react'
import { useAuth0  } from "@auth0/auth0-react";

export default function Start() {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
    <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
}
