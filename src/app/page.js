'use client'; // Ensures this component is treated as a client-side component

import {signIn, signOut, useSession} from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BounceLoader } from "react-spinners";
async function logOut() {
    try {
        await fetch(`/api/auth/logout`, { method: "GET" });
    } catch (err) {
        console.error(err);
    }
}
export default function Page() {
    const override= {
        display: "block",
        margin: "auto",
        borderColor: "red",
        position:"relative",
        top:"350px"
    };
    const { data: session, status } = useSession();
    const router = useRouter(); // Use useRouter for navigation
    useEffect(() => {
        if (status === 'unauthenticated' ) {
            signIn('keycloak');
        }
        if (session) {
            let active =session.isActive

            // if(active==false){
            //     console.log("session null")
            //     logOut().then(() => signOut({ callbackUrl: "/auth/confirm-mail" }))
            //     return
            // }
            router.push("/feed");
        }


    }, [status, session, router]);

    return (
        <div className="flex justify-center items-center h-screen m-auto">
            <BounceLoader color="#36d7b7" cssOverride={override} />
        </div>
    );
}
