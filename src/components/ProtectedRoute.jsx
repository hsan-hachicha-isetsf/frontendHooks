import { Outlet, Navigate } from 'react-router-dom' 
import Menu from './Menu';
 
const ProtectedRoutes = () => { 
   
    let token=localStorage.getItem("CC_Token"); 
      
    return( 
    token!=null ? <><Menu/><Outlet/></>: <Navigate to="/login"/> 
    ) 
    }
    export default ProtectedRoutes