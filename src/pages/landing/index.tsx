import { Link } from "react-router-dom";
import './styles.css';

export default function LandingPage() {
  return (
    <body className="landingpage">
      <div className="center-content">
      <h1 className="title">DataSoc 2024 Landing Page!</h1>
      <p className="p1">Where secrets are hidden</p>
      <Link to="/login" className="navbar">Login</Link>
    </div>
    </body>
    
  );
}
