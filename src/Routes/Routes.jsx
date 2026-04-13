import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import About from '../Components/About/About';
import BookDetails from '../Components/BookDetails/BookDetails';
import ReadList from '../Components/ReadList/ReadList';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        index:true,
        path:"/",
        loader:()=>fetch('booksData.json'),
        Component:Home
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"readList",
        loader:()=>fetch('booksData.json'),
        Component:ReadList
      },
      {
        path:"/bookDetails/:id",
        loader:()=>fetch('booksData.json'),
        Component:BookDetails
      }
    ]

  },
]);