import React, {useState} from "react";
import axios from 'axios';
import history from "../helpers/history";
import { BrowserRouter, Link } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [state, setState] = useState({
    credentials: {
      username: '',
      password: ''
    }
  })

  const [error, setError] = useState("")
  // const error = "";
  //replace with error state

 const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
    if (state.credentials.username === "" || state.credentials.password ==="") {
      setError("Username or Password not valid.")
    } else setError("")
  };


  // setError(()=>{
  //   if (state.credentials.username === "" || state.credentials.password ==="") {
  //     return "Username or Password not valid."
  //   }
  // })


 const login = e => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/login", state.credentials)
      .then (res => {
        // console.log("This is it", res.data)
        localStorage.setItem("token",res.data.payload)
        console.log("props history")
        history.push('/bubbles');
      })
      .catch(err => {
        console.log(err);
      })

  };



  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>

      <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>



      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"