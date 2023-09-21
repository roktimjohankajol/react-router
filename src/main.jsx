import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>, 
  children : [
    {
      path: "about",
      element: <About></About>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    },
    {
      path:'users',
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
    }, 
    {
      path: 'users/:userID', 
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`), 
      element: <UserDetails></UserDetails>
    },
    {
      path: 'post', 
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    }
  ],
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
