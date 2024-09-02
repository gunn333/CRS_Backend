import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleCar from "./pages/SingleCar";
import BookCar from "./pages/BookCar";


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />

            <Route
              path="/singleCar/:id"
              element={user ? <SingleCar /> : <Navigate to="/login" />}
            />

            <Route
              path="/booking/:carid"
              element={user ? <BookCar /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
