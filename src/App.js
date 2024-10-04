import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Username from "./component/Username";
import Reset from "./component/Reset";
import Regiester from "./component/Regiester";
import Recovery from "./component/Recovery";
import Profile from "./component/Profile";
import Password from "./component/Password";
import PageNotFound from "./component/PageNotFound";
import Landing from "./pages/landing/Landing";
import Animal from "./pages/animal/Animal";

// import { Provider } from "react-redux";
import Tree from "./pages/tree/Tree";
import Birds from "./pages/bird/Birds";
import Fish from "./pages/fish/Fish";
import Login from "./component/login/Login";
import Signup from "./component/singup/Signup";
import ForgetPassword from "./component/forgetPassword/ForgetPassword";
import PasswordReset from "./component/passwordReset/PasswordReset";
import SetNewPassword from "./component/setnewpassword/SetNewPassword";
import MouseContextProvider from "./component/mouseContext/MouseContextProvider";
import Calculater from "./pages/calculater/Calculater";
import TodoCreateMain from "./pages/todoCreate/TodoCreateMain";
import ReduxToolLearning from "./component/ReduxLearning/ReduxToolLearning";
import { ThemeProviderCustom } from "./component/theme/ThemeProvider";
import OtpCard from "./component/login/OtpCard";
import Customloader from "./component/loader/Customloader";
// import { store } from "./reduxpractice/store";

// ***import all components***

/***root router */
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <Landing /> },
  { path: "/signup", element: <Signup /> },
  { path: "/setPassword", element: <SetNewPassword /> },
  { path: "/forgetPassword", element: <ForgetPassword /> },
  { path: "/forgetReset", element: <PasswordReset /> },
  { path: "/animal", element: <Animal /> },
  { path: "/trees", element: <Tree /> },
  { path: "/birds", element: <Birds /> },
  { path: "/fishes", element: <Fish /> },
  { path: "/user", element: <Username /> },
  { path: "/user", element: <Username /> },
  { path: "/reset", element: <Reset /> },
  { path: "/register", element: <Regiester /> },
  { path: "/recovery", element: <Recovery /> },
  { path: "/profile", element: <Profile /> },
  { path: "/password", element: <Password /> },
  { path: "/calculater", element: <Calculater /> },
  { path: "/todo", element: <TodoCreateMain /> },
  { path: "/otpCard", element: <OtpCard /> },
  { path: "*", element: <PageNotFound /> },
  { path: "/redux-toolkit", element: <ReduxToolLearning /> },
  { path: "/redux-toolkit", element: <ReduxToolLearning /> },
  { path: "/loader", element: <Customloader /> },
]);
function App() {
  return (
    <>
      <ThemeProviderCustom>
        <MouseContextProvider>
          {/* <Provider store={store}> */}
          <RouterProvider router={router}></RouterProvider>
          {/* </Provider> */}
        </MouseContextProvider>
      </ThemeProviderCustom>
    </>
  );
}

export default App;
