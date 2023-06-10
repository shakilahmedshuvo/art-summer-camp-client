import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import SignUp from './Components/Home/SignUp/SignUp';
import ErrorPage from './Components/Utilities/ErrorPage/ErrorPage';
import AuthProvider from './Components/Utilities/Providers/AuthProvider';
import Instructor from './Components/Home/Instructor/Instructor';
import PopularClasses from './Components/Home/PopularClasses/PopularClasses';
import DashBoard from './Layout/DashBoard ';
import ManageClasses from './Components/DashBoard/ManageClasses/ManageClasses';
import ManageUsers from './Components/DashBoard/ManageUsers/ManageUsers';
import PaidClasses from './Components/DashBoard/PaidClasses/PaidClasses';
import UserPayment from './Components/DashBoard/UserPayment/UserPayment';
import PrivateRoute from './Components/Utilities/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/instructors')
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/instructor',
        element: <Instructor />,
        loader: () => fetch('http://localhost:5000/instructors')
      },
      {
        path: 'popularClasses',
        element: <PopularClasses />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/manageClasses',
        element: <ManageClasses />
      },
      {
        path: '/dashboard/manageUsers',
        element: <ManageUsers />
      },
      {
        path: '/dashboard/paidClasses',
        element: <PaidClasses />
      },
      {
        path: '/dashboard/userPayment',
        element: <UserPayment />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
