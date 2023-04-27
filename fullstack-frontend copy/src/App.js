import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import HomeIntegrated from "./pages/HomeIntegrated"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./student/AddStudent";
import EditStudent from "./student/EditStudent";
import ViewStudent from "./student/ViewStudent";
import SearchAppBar from "./layout/SearchAppBar";
function App() {

  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        {/* <SearchAppBar></SearchAppBar> */}
        <Routes>
          <Route exact path="/" element={<HomeIntegrated />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/editstudent/:id" element={<EditStudent />} />
          <Route exact path="/viewstudent/:id" element={<ViewStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
