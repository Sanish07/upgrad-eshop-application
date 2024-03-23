import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const DisplayCard = ({productData}) => {
    const[user] = useState("admin"); 
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
            <Link to={`/products/${productData.id}`}><Button size="small" variant="contained" sx={{backgroundColor : "#3f51b5"}}>Buy</Button></Link>
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