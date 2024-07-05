import Task from "./components/Task.js";
import Home from "./pages/Home.js";
import SignIn from "./pages/SignIn.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/Home"
          element={<Home /> }
        />
      <Route
          path="/task"
          element={<Task /> }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;