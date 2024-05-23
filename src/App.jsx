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

export const app_id = "9a37f401-19dd-4edc-afe7-a666b14c6ff6";
export const api_key = "Mzg0NTY3MDktMDhlNy00YTk3LThjZjItMWU1MGVjMzE4ZTk0";

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
