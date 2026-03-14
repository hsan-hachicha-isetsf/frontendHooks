import {useEffect} from 'react'; 
import { useNavigate} from 'react-router-dom' 
const Logout = () => { 
const navigate = useNavigate(); 
useEffect(() => { 
localStorage.removeItem("CC_Token");  
localStorage.removeItem("user")  
localStorage.removeItem("refresh_token") 
navigate("/login"); 
}, [navigate]); 
return ( 
<div> 
</div> 
) 
}; 
export default Logout;