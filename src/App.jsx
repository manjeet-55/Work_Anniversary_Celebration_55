import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
import { Header } from "./components";
function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    console.log("Inside console");
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      // setToken(data);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<ProtectedRoute token={token} />}>
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ token }) => {
  if (token) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
  return <Navigate to='/login' />;
};

export default App;
