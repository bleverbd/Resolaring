import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InIcon from "@/components/InIcon";

const getCartFromLocalStorage = () => {
  let cart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const TableIt = () => {
  const cart = getCartFromLocalStorage();

  return (
    <>
      {cart.map((item, index) => (
        <TableRow key={index} >
          <TableCell>
            <img
              src={item.src}
              alt={item.name}
              className="w-[168px] h-[168px] object-cover rounded-xl"
            />
          </TableCell>
          <TableCell >{item.name}</TableCell>
          <TableCell >{item.price}</TableCell>
          

          <TableCell > <InIcon /></TableCell>
          <TableCell > {item.price}</TableCell>


         
        </TableRow>
      ))}
    </>
  );
};



const Cart = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">My Card</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Subtotal</TableHead>

          </TableRow>
        </TableHeader>

        <TableBody>
         <TableIt />
        </TableBody>
      </Table>
    </div>
  );
};

export default Cart;
