import { useState } from "react";

const Login = () => {
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  function submit(){
    console.log("submitted", email, password);
  }

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={(e) => {e.preventDefault(); submit()}}>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)} } required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)} } required />
          </div>
          <div className="login-btn" style={{gap: "20px"}}>
            <br />
            <button type="submit" className="btn login-btn">
              Login
            </button>
            <button className="btn signup-btn">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
