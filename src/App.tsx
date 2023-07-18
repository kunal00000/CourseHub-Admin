import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing";
import CourseDashboard from "./components/course/CourseDashboard";
import CreateCourse from "./components/course/CreateCourse";
import EditCourse from "./components/course/EditCourse";
import Dashboard from "./components/overview/Dashboard";
import Login from "./components/utilComponents/Login";
import Register from "./components/utilComponents/Register";

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
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
