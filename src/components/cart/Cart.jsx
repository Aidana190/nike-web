import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const {cart, getCart, changeProductCount,  deleProductFromCart} = useCart();
  const cartCliner = () =>{
    localStorage.removeItem("cart");
    getCart()
  }
  useEffect(()=>{
    getCart()
  },[]);
  console.log(cart);

  return (
    <div>
      <TableContainer sx={{bgcolor:'#333', height:'100vh'}} component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow >
              <TableCell sx={{color:'white'}} align="right">Picture</TableCell>
              <TableCell sx={{color:'white'}} align="right">Titlie</TableCell>
              <TableCell sx={{color:'white'}} align="right">Category</TableCell>
              <TableCell sx={{color:'white'}} align="right">Price</TableCell>
              <TableCell sx={{color:'white'}} align="right">Count</TableCell>
              <TableCell sx={{color:'white'}} align="right">SubPrice</TableCell>
              <TableCell sx={{color:'white'}} align="right">-</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {cart.products.map((elem)=>(
             <TableRow key={elem.item.id} 
             sx={{"&:last-child td, & :last-child th": {border: 0}}}>
              <TableCell 
              sx={{color:'white'}}
              align="right" 
              scope="row" 
              component="th">
                <img src={elem.item.image} alt="" width={70} />
              </TableCell>
              <TableCell sx={{color:'white'}} align="right">{elem.item.title}</TableCell>
              <TableCell sx={{color:'white'}} align="right">{elem.item.category}</TableCell>
              <TableCell sx={{color:'white'}} align="right">{elem.item.price}$</TableCell>
              <TableCell sx={{color:'white'}} align="right">
                <input onChange={(e)=>{
                  changeProductCount(elem.item.id, e.target.value)
                  }} type="number" 
                     min={1} 
                     max={20} 
                     defaultValue={elem.count}/>
              </TableCell>
              <TableCell sx={{color:'white'}} align="right">{elem.subPrice}$</TableCell>
              <TableCell sx={{color:'white'}} align="right"><Button sx={{bgcolor:"white", color:"black"}} onClick={()=>deleProductFromCart(elem.item.id)}>DELETE</Button></TableCell>
             </TableRow>
          ))}
          </TableBody>

      </Table>
      <Button sx={{bgcolor:"white", color:"black",}} onClick={cartCliner} >BUY NOW FOR {cart.totalPrice}$</Button>
    </TableContainer>
    </div>
  )
};

export default Cart;