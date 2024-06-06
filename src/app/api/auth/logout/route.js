// pages/api/auth/logout.js

import { authOptions } from "../[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getIdToken } from "../../../../utils/SessionTokenAccessor";

export async function GET(req, res) {
    let session = await getServerSession(authOptions);

    if (session) {
        const idToken = await getIdToken();

        // Construct the Keycloak logout URL
        const url = `${process.env.END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${process.env.NEXTAUTH_URL}`;

        try {
            const resp = await fetch(url, { method: "GET" });

            if (resp.ok) {
                // If the response is OK, redirect to /feed
                res.writeHead(302, { Location: '/feed' });
                res.end();
                return;
            } else {
                // Handle non-OK response
                console.error(`Logout failed with status: ${resp.status}`);
                res.status(500).end();
                return;
            }
        } catch (err) {
            console.error(err);
            res.status(500).end();
            return;
        }
    } else {
        // If no session, just redirect to home or login
        res.writeHead(302, { Location: '/' });
        res.end();
        return;
    }
}
