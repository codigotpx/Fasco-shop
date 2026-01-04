import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from '../src/pages/Home/Home.jsx'
import './index.css'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import ForgetPassword from './pages/auth/ForgetPassword.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }, 
  {
    path: '/forget-password',
    element: <ForgetPassword/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)