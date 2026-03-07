import { BrowserRouter as Router,Routes,Route  } from "react-router-dom"
import ArticlesApp from "./components/articles/ArticlesApp"
import CategorieApp from "./components/categories/CategorieApp"
import Scategorie from "./components/scategories/Scategorie"
import Menu from "./components/Menu"
import ListArticleCard from "./components/client/ListArticleCard"
function App() {
  
  return (
    <>
    <Router>  
      <Menu />
    <Routes>
      <Route path="/categories" element={<CategorieApp />} />
      <Route path="/scategories" element={<Scategorie />} />
      <Route path="/articles" element={<ArticlesApp />} />
      <Route path="/client" element={<ListArticleCard />} />
      
    </Routes>
    </Router>
    </>
  )
}

export default App
