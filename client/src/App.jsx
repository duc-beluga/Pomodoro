import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import axios from "axios";
import { useAuth } from "./context/AuthContext";

axios.defaults.withCredentials = true;

const App = () => {
  const { isLoggedIn } = useAuth();

  const element = useRoutes([
    {
      path: "/",
      element: isLoggedIn ? <Home /> : <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <div>{element}</div>
    </>
  );
};

export default App;
