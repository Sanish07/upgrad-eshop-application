import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveProduct } from '../../common/store/actions/productActions';


const DisplayCard = ({productData, user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuyProduct = () => {
    dispatch(setActiveProduct(productData.id));
    navigate(`/products/${productData.id}`
    // ,{
    //   state : {
    //     productData
    //   }
    // }
    );
  };

    return (
        <Card key={productData.id} sx={{width : 315, mt : '4vh', mb : '3vh'}}>
            <CardMedia 
            sx={{width : '100%', maxWidth : '100%'}} 
            image={productData.imageUrl}
            title={productData.name}
            component={'img'}/>
            
            <CardContent sx={{minHeight : 120}}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography gutterBottom sx={{fontSize : '1.1rem'}} variant="h6">
                        {productData.name}
                    </Typography>
                    <Typography gutterBottom sx={{fontSize : '1.1rem'}} variant="h6">
                    ₹{productData.price}
                    </Typography>
                </Stack>
                <Typography color={'gray'} sx={{fontWeight : 100}} variant="body2">
                  {productData.description.length > 120 ? productData.description.slice(0,120)+"..." : productData.description}
                </Typography>
            </CardContent>
            <CardActions sx={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
            <Button onClick={handleBuyProduct} size="small" variant="contained" sx={{backgroundColor : "#3f51b5"}}>Buy</Button>
                   {
                    user === "admin" ?
                      <div>
                          <IconButton>
                            <EditIcon/>
                          </IconButton>
                          <IconButton>
                            <DeleteIcon/>
                          </IconButton>
                      </div>
                     : <></>
                   }
                </CardActions>
        </Card>
    );
};

export default DisplayCard;