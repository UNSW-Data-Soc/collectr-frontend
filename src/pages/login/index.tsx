import { useState } from "react";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>Here is the login page</p>
      <LoginForm />
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
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
