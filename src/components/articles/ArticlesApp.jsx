import { useEffect, useState } from "react";
import { deletearticle, fetcharticles } from "../../services/articleservice";
import ArticleList from "./ArticleList";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Imp
import Insertarticle from "./Insertarticle";
const ArticlesApp = () => {
    const[products,setProducts]=useState([]);
    const getAllArticles=async()=>{
        try {
            const response=await fetcharticles();   
            setProducts(response.data);
           
        } catch (error) {
            console.log(error);
        }   
    }
useEffect(()=>{
    getAllArticles();
},[])
const addProduct=(newproduit)=>{
    setProducts([newproduit,...products]);
    //navigate to add product form
}
const deleteProduct=(productId,designation)=>{
confirmAlert({
title: "Confirm delete...",
message: " supprimer l' article: " + designation,
buttons: [
    {
label:'Oui',
onClick: () => deletearticle(productId)
.then(res=>
setProducts(products.filter((product) => product._id !==productId)))
//.then(console.log("suppression effectuée avec success"))
.catch(error=>console.log(error))
},
{
label: 'Non',
} 
]
});
}

const updateProduct=(updatedproduit)=>{
    setProducts(products.map((p)=>(p._id===updatedproduit._id?updatedproduit:p)));
}
  return (
    <div>
       { 
    <Insertarticle addproduct={addProduct} />}
      <ArticleList products={products} deleteProduct={deleteProduct} updateProduct={updateProduct} />
      
    </div>
  )
}

export default ArticlesApp
