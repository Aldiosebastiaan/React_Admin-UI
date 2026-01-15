import "./App.css";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/dashboard";
import ErrorPage from "./pages/error";
import BalancePage from "./pages/balances";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext.jsx";
import ExpensesPage from "./pages/expense.jsx";

function App() {
  const { user } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return !user ? children : <Navigate to="/" />;
  };

const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },

    {
      path: "/expense",
      element: (
        <RequireAuth>
          <ExpensesPage />
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;