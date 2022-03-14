import fetch from "node-fetch";

// export default async function execute(
//     url,
//     method,
//     body,
//     headers,
//     content_type
// ) {
//     if (method === "POST"){
//         return await fetch(
//             url,
//             {
//                 method: method,
//                 body: body,
//                 headers: {authorization: headers, 'Content-Type': content_type }
//             }
//         )
//     } else {
//         return await fetch(
//             url,
//             {
//                 method:method,
//                 headers: {authorization: headers}
//             }
//         )
//     }
// }

export default async function execute(code, method, list_type) {
    if (method === "POST"){
        let client_id = "vCnyyrFbqdS0GPf5-i1c8g"
        let secret = "uzzkURbcXC25YXyTw1ZGOvcfDLl8sg"
        let encodedHeader = Buffer.from(`${client_id}:${secret}`).toString("base64")
        let response = await fetch(
            'https://www.reddit.com/api/v1/access_token',
            {
                method: method,
                body:`grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/login/callback`,
                headers: {authorization: `Basic ${encodedHeader}`, 'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );

        return await response
    } else {
        let response = await fetch(
            `https://oauth.reddit.com/${list_type}`,
            {
                method: method,
                headers: {authorization: `bearer ${code}`}
            }
        );

        return await response
    }
}