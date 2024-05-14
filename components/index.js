"use client";
import React, { StrictMode} from 'react';
import App from './App';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../components/store'

import { IndexRouters } from '../components/router';
const router = createBrowserRouter([

    ...IndexRouters,
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


