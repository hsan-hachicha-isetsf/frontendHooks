import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable  
} from 'material-react-table';
import { Box } from '@mui/material';
import { Button } from 'react-bootstrap';
import EditArticle from './EditArticle';



const ArticleList = ({ products,deleteProduct,updateProduct }) => {
  const[art,setArt]=useState({})
const [show,setShow]=useState(false);

const handleClose=()=>setShow(false);
const handleShow=()=>setShow(true); 
const modifart=(value)=>{
setArt(value);
handleShow();
}
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'imageart', //access nested data with dot notation
        header: 'Image article',
        Cell: ({ cell}) => (
         <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',}}
         >
         <img
              alt=""
              height={100}
             src={cell.getValue()}
             loading="lazy"
             style={{ borderRadius: '20%' }}
        />
        </Box>),
      },
      {
        accessorKey: 'reference',
        header: 'Référence',
        size: 150,
      },
      {
        accessorKey: '_id',
        header: 'Id article',
        size: 150,
      },
      {
        accessorKey: 'designation', //normal accessorKey
        header: 'Désignation',
        size: 200,
      },
      {
        accessorKey: 'marque',
        header: 'Marque',
        size: 150,
      },
      {
        accessorKey: 'prix',
        header: 'Prix article',
        size: 150,
      },
      {
        accessorKey: 'qtestock',
        header: 'Quantité en stock',
        size: 150,
      },
      {
accessorKey: '_id',
header: 'actions',
size: 100,
Cell: ({ cell, row }) => (
<div >
<Button
onClick={() => {modifart(cell.row.original)}}
variant="warning"
size="md"
className="text-warning btn-link edit"
>
<i class="fa-solid fa-pen-to-square"></i>
</Button>
<Button
onClick={(e) => {
deleteProduct(cell.row.original._id,cell.row.original.designation, e);
}}
variant="danger"
size="md"
className="text-danger btn-link delete"
>
<i className="fa-solid fa-trash"></i></Button>
</div>
),
},
    ],
    [products],
  );

  const table = useMaterialReactTable({
    columns,
    data: products, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return  (
    <>
    {show && <EditArticle 
    show={show}
    art={art} 
    updateproduct={updateProduct} 
    handleClose={handleClose} />}
  <MaterialReactTable table={table} />;
  </>
  )
};

export default ArticleList;
