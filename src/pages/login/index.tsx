import { useState } from "react";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import './styles.css';

export default function LoginPage() {
  return (
    <div className="center">
      <div className="container">
        <div className="form-container">
          <div>
            <h1 className="heading">Sign In</h1>
            <LoginForm />
          </div>
        </div>
        <div className="sideimage">
          <div className="backimage">
            <img src="logo.png" width="80%" height= "20%"></img>
          </div>
        </div>
      </div>
    </div>
 
  );
}

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <form
      onSubmit={(e) => {
        e.preventDefault();
        void login({ email, password }).then((success) => {
          if (success) {
            console.log("Login successful");
            navigate("/coverphotos"); // TODO
          } else {
            console.log("Login failed");
          }
        });
      }}
    >
      <label>
        <div className="input-box">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
      </label>
       
      <label>
        <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
      </label>
      <div className="butt">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
