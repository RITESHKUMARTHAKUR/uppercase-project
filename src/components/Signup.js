import React, { useState, useRef} from "react";
import { useAuth }  from "../contexts/AuthContext";

function Signup() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { signup } = useAuth() ; 

  

  const [error , setError] = useState("");
  const [loading , setLoading ] = useState(false) ; 

  async function handleSubmit(e) {
    e.preventDefualt();
    if (passwordRef.current.value !== confirmpasswordRef.current.value ) {
      return setError("Passwords dono match")

    }else if (passwordRef.current.value.length < 6) {
      return setError("Length of password is less than 6 character");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      console.log("successfull");
    } catch(error) {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          label="email"
          inputRef={emailRef}
          placeholder="Enter email"
          type="email"
          id="email"
          required
        /> <br />
        <label htmlFor="password">Password</label>
        <input
          label="password"
          inputRef={passwordRef}
          placeholder="Enter password"
          type="password"
          id="password"
          required
        /> <br />
        <label htmlFor="confPassword">ConFirm Password</label>
        <input
          label="congPassword"
          inputRef={confirmpasswordRef}
          placeholder="confPassword"
          type="password"
          id="confPassword"
          required
        /> <br />
        <button disabled={loading} >RItesh</button>
      </form>
    </React.Fragment>
  );
}

export default Signup;
