import HomeLayOut from '@/Layouts/HomeLayOut';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router'
const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayOut />
  },
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/auth/signup',
    element: <Signup />
  },
])


export default Router;
