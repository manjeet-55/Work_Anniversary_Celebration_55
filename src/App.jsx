import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Admin, Home, Login, SignUp } from "./pages";
import OneSignal from "react-onesignal";

export const app_id = "e4a9b913-d9a6-44b5-aac9-4ae022e599d4";
export const api_key = "MmEwNDc3ZWEtYjJhMC00MjBhLTk4ZjctMzY2MzM5MmM5N2Iw";

function App() {
  const initializeOneSignal = async () => {
    await OneSignal.init({
      appId: app_id,
      allowLocalhostAsSecureOrigin: true,
    })
      .then(() => {
        console.log("inside then");
        OneSignal.Slidedown.promptPush({ force: true });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    initializeOneSignal();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='' element={<Home />} />
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedRoute = () => {
  if (sessionStorage.getItem("token")) {
    return <Outlet />;
  }
  return <Navigate to='/login' />;
};

export default App;
