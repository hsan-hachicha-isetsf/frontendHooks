import { BrowserRouter as Router,Routes,Route  } from "react-router-dom"
import ArticlesApp from "./components/articles/ArticlesApp"
import CategorieApp from "./components/categories/CategorieApp"
import Scategorie from "./components/scategories/Scategorie"
import Menu from "./components/Menu"
import ListArticleCard from "./components/client/ListArticleCard"
import Login from "./components/authentification/Login"
import Dashboard from "./components/Dashboard"
import Logout from "./components/authentification/Logout"
import NavBar from "./components/authentification/Navbar"
import Register from "./components/authentification/register"
import ProtectedRoutes from "./components/ProtectedRoute"
function App() {
  
  return (
    <>
    <Router>  
     <NavBar/> 
    <Routes>
    <Route element={<ProtectedRoutes/>}> 
      <Route path="/categories" element={<CategorieApp />} />
      <Route path="/scategories" element={<Scategorie />} />
      <Route path="/articles" element={<ArticlesApp />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/client" element={<ListArticleCard />} />    
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
