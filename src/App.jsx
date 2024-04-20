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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedRoute = () => {
  if (sessionStorage.getItem("token")) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return <Navigate to='/login' />;
};

export default App;
