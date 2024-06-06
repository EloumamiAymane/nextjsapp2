"use client"
import React, {useEffect} from 'react';
import Default from '../../components/layouts/dashboard/default';
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {BounceLoader} from "react-spinners";
import {Container} from "react-bootstrap";


export default function RootLayout({ children }) {
    const override= {
        display: "block",
        margin: "auto",
        borderColor: "red",
        position:"relative",
        top:"350px"
    };
    const { data: session, status } = useSession();
    const router = useRouter(); // Use useRouter for navigation
    console.log("yeeees")
    useEffect(() => {
        let content
        if (status === 'unauthenticated') {
            signIn('keycloak');
        }else{

        }

    }, [status, session, router]);
  return (
      <>          {session ? <Default >
              {children}
          </Default> :<Container className="p-0">
              <BounceLoader color="#36d7b7" cssOverride={override}/>
          </Container >}


      </>
  );
}
