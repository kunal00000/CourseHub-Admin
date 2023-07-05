import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/utilComponents/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/course/CreateCourse";
import Register from "./components/utilComponents/Register";
import ShowCourses from "./components/ShowCourses";

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
        <Route path="/about" element={<CreateCourse />} />
        <Route path="/courses" element={<ShowCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
