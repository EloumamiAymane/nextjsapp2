"use client"
import "../../public/assets/scss/socialv.scss"
import "../../public/assets/scss/customizer.scss"
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {store} from "../components/store";
import {UserProvider} from "@/components/Context/Context";
import {LoadingProvider} from "@/components/Context/StateApp";

export default function Template({ children }) {

    return (
        <html lang="en">
        <head>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
        </head>


        <body>

        <Provider store={store}>
            <UserProvider>
                <LoadingProvider>
                    {children}
                </LoadingProvider>
              </UserProvider>

        </Provider>
        </body>
        </html>
    );
}
