import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Home, Login } from "./pages";
import { Header } from "./components";
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
        <Header />
        <Outlet />
      </>
    );
  }
  return <Navigate to='/login' />;
};

export default App;
