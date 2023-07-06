import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/utilComponents/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/course/CreateCourse";
import Register from "./components/utilComponents/Register";
import Dashboard from "./components/overview/Dashboard";
import CourseDashboard from "./components/course/CourseDashboard";
import EditCourse from "./components/course/EditCourse";

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
        <Route path="/dashboard/edit/:id" element={<EditCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
