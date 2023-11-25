import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import axios from "axios";
import { useAuth } from "./context/AuthContext.jsx";

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
