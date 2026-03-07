import { useState,useEffect } from "react";
import { fetcharticles } from "../../services/articleservice";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ListArticleCard = () => {
    const[articles,setArticles]=useState([]);
    const getAllArticles=async()=>{
        try {
            const response=await fetcharticles();   
            setArticles(response.data); 
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        getAllArticles();
    },[]);
  return (
    <div className="container"> 
<div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}> 
      {articles.map((article)=>  
     <Card sx={{ maxWidth: 'auto', margin: '1' }}>
      <CardMedia
        component="img"
        alt="image"
        height="160"
        image={article.imageart}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {article.reference} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Prix : {article.prix} DT 
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={article.qtestock<=1} variant="contained" color="secondary" size="large" > 
         {article.qtestock<1? "OUT OF SOLD": "Add to cart"} 
</Button> 
      </CardActions>
    </Card> 
)}
    </div>
    </div>
  )
}

export default ListArticleCard
