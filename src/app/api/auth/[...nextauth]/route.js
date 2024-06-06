
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import {jwtDecode} from "jwt-decode";
import { encrypt } from "@/utils/encryption";
import {redirect} from "next/navigation";
// utils/api.js

export async function saveUser(user,token) {
    let newUser=JSON.stringify(user)
    console.log(newUser)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/saveUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },

        body: JSON.stringify(user),
    });

    if (!response.ok) {
       console.log("error ")
    }

    return response.json();
}

export const authOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.INSEAPRO_FRONTEND_CLIENT_ID}`,
            clientSecret: `${process.env.INSEAPRO_FRONTEND_CLIENT_SECRET}`,
            issuer: `${process.env.AUTH_ISSUER}`,
        }),
    ],

    callbacks: {
        async jwt({ token, account }) {
            const nowTimeStamp = Math.floor(Date.now() / 1000);
          //  console.log("sign")
            if (account) {
              //  console.log("inside")
                token.decoded = jwtDecode(account.access_token);
                token.access_token = account.access_token;
                token.id_token = account.id_token;
                // token.expires_at = account.expires_at;
                // token.refresh_token = account.refresh_token;
              console.log(token)
               let user={
                  firstName:token.decoded.given_name,
                   lastName:token.decoded.family_name,
                   email:token.decoded.email

               }
               const response=saveUser(user, token.access_token)

                return token;
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client

            console.log( session)
            session.access_token = encrypt(token.access_token); // see utils/sessionTokenAccessor.js
            session.id_token = encrypt(token.id_token);  // see utils/sessionTokenAccessor.js
            // session.roles = token.decoded.realm_access.roles;
           // session.error = token.error;
         //  console.log(session)
            // console.log("inside session ")
            return session;
        },


    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
