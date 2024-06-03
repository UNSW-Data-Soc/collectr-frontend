import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Landing</h1>
      <p>This is the landing page</p>
      <Link to="/login">Login</Link>
    </div>
  );
}
