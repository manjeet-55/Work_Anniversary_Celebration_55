import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedRoute = () => {
  if (true) {
    return (
      <>
      <Header/>
        <Outlet />
      </>
    );
  }
  return <Navigate to='/login' />;
};

export default App;
