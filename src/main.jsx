import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import Frist from './Components/Frist/Frist.jsx';
import Friends from './Components/Friends/Friends.jsx';
import Friendetaills from './Components/Friendetails/Friendetaills.jsx';
import Post from './Components/Post/Post.jsx';
import Postdetails from './Components/Postdetails/postdetails.jsx';
import Notfound from './Components/Notfound/Notfound.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App></App>
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path:'/contact',
//     element:<Contact></Contact>
//   },
//   {
//     path:"/abother",
//     element:<div>hellos every</div>
//   }
// ]);
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
      path:'/',
      element:<Frist></Frist>
      },
      {
      path:'frinds',
      element:<Friends></Friends>,
     loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
     path:'friend/:friendId', //if need dainmic
     element:<Friendetaills></Friendetaills>,
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
       path: 'posts',
       element:<Post></Post>,
       loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
      path:'post/:posts',
      element: <Postdetails></Postdetails>,
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.posts}`)
      },
      {

        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'app',
        element:<App></App>
      },
      {
        path:'/',
       
        errorElement:<Notfound></Notfound>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
