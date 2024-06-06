'use client'; // Ensures this component is treated as a client-side component

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BounceLoader } from "react-spinners";

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
console.log("yeeees")
    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn('keycloak');
        }
        if (session) {
            router.push("/feed");
        }
    }, [status, session, router]);

    return (
        <div className="flex justify-center items-center h-screen m-auto">
            <BounceLoader color="#36d7b7" cssOverride={override} />
        </div>
    );
}
