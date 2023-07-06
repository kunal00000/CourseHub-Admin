import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/utilComponents/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/course/CreateCourse";
import Register from "./components/utilComponents/Register";
import Dashboard from "./components/Dashboard";
import CourseDashboard from "./components/course/CourseDashboard";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create" element={<CreateCourse />} />
        <Route path="/dashboard/courses" element={<CourseDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
