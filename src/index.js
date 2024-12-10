import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Books from './Books';
import ClientAlbums from './ClientAlbums';
import Contact from './Contact';
import Header from './header';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
  { path: "/", element: <><Header /> <App /></> },
  { path: "/home", element: <><Header /> <Home /></> },
  { path: "/portfolio", element: <><Header /> <Portfolio /></> },
  { path: "/about", element: <><Header /> <About /></> },
  { path: "/books", element: <><Header /> <Books /></> },
  { path: "/clientalbums", element: <><Header /> <ClientAlbums /></> },
  { path: "/contact", element: <><Header /> <Contact /></> },
])

root.render(
  <>
    <RouterProvider router={routes} />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
