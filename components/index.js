"use client";
import React, { StrictMode} from 'react';

import App from './App';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from './store'

import { IndexRouters } from './router';
import {SimpleRouter} from "./router/simple-router";
const router = createBrowserRouter([

    ...IndexRouters,
    ...SimpleRouter
], { basename: process.env.PUBLIC_URL })
 function Bootstrap(){
     return (

             <StrictMode>
                 <Provider store={store}>
                     <App>
                         <RouterProvider router={router}>
                         </RouterProvider>
                     </App>
                 </Provider>
             </StrictMode>

     )
 }
 export default Bootstrap


