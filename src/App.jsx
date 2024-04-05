import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Home, Invite, Login, SignUp } from "./pages";
import { Header } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/invite' element={<Invite />} />
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
        <Header />
        <Outlet />
      </>
    );
  }
  return <Navigate to='/login' />;
};

export default App;
