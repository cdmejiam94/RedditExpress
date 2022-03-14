import execute from "../config/fetch.import.js";

export default async function getListByType(code, list_type){
    try{
        let response = await execute(code, 'POST', "");
        
        let body = await response.json();

        response = await execute(body.access_token, 'GET', list_type);
        
        let list = await response.json();
        
        return await list
    } catch(err){
        console.log(err);
        return { error: err }
    }
}