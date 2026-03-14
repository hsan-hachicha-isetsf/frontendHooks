import Api from "../axios/api";
const USER_API="users" 
//Méthode Register
export const signup=async(user)=> {  
return await Api.post(USER_API + "/register",user); 
}     

//Méthode login
export const signin=async(user)=> {  
return await Api.post(USER_API+"/login", user);  
}  