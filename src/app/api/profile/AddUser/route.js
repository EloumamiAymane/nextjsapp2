// import {getSession} from "next-auth/react";
//
//  async function handler(req, res) {
//
//     if (req.method === 'POST') {
//         try {
//             // Retrieve session to get access token
//             const session = await getSession();
//             console.log(session)
//             if (!session) {
//                 return res.status(401).json({ error: 'Unauthorized' });
//             }
//
//             // Extract user data from request body
//             const user= req.body;
//
//             // Make a request to your backend to add the user
//             const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/saveUser`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${session.access_token}`,
//                 },
//                 body: JSON.stringify(user),
//             });
//
//             // Check if request was successful
//             if (response.ok) {
//                 const userData = await response.json();
//                 // Return the user data to the client
//                 return res.status(200).json(userData);
//             } else {
//                 // If request failed, return an error response
//                 return res.status(response.status).json({ error: 'Failed to add user' });
//             }
//         } catch (error) {
//             // Handle any unexpected errors
//             console.error('Error adding user:', error);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//     } else {
//         // Return an error response if the request method is not supported
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }
// export {  handler as POST };
