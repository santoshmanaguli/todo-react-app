import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[fullname, setFullname] = useState();

  function createAccount() {
    console.log("account created");
  }

  return (
    <div className="container">
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createAccount();
          }}
        >
          <div>
            <label htmlFor="fullname">Full Name:</label>
            <br />
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="login-btn" style={{ gap: "20px" }}>
            <br />
            <button type="createAccount" className="btn login-btn">
              Signup
            </button>
            <button className="btn signup-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
