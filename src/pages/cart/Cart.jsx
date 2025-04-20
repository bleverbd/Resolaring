import React, { useEffect, useState } from "react";
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
import Cross from "@/components/Cross";
import addtocarticon from "../../assets/addtocart_icon.svg";
import addToCartProcode from "../../assets/addtocart_icon2.svg";
import addToCartNode from "../../assets/addtocart_icon4.svg";
import cross_icon from "../../assets/cross_icon.svg";

import oderIcon1 from "../../assets/order1.svg";
import oderIcon2 from "../../assets/order2.svg";
import oderIcon3 from "../../assets/order3.svg";
import oderIcon5 from "../../assets/oder5.svg";

const TableIt = ({ cart, quantities, setQuantities, handleRemoveItem }) => {
  const handleCountChange = (index, newCount) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newCount;
    setQuantities(updatedQuantities);
  };

  return (
    <>
      {cart.map((item, index) => {
        const subtotal = item.price * quantities[index];
        return (
          <TableRow key={index}>
            <TableCell>
              <img
                src={item.src}
                alt={item.name}
                className="w-[168px] h-[168px] object-cover rounded-xl"
              />
            </TableCell>
            <TableCell className="text-[#071431] text-xl font-medium">
              {item.name}
            </TableCell>
            <TableCell className="text-[#798090] text-xl font-medium">
              ${item.price}
            </TableCell>

            <TableCell className="text-[#798090] text-xl font-medium">
              <InIcon
                onCountChange={(newCount) => handleCountChange(index, newCount)}
              />
            </TableCell>

            <TableCell className="flex gap-4 items-center mt-15 text-[#798090] text-xl font-medium">
              ${subtotal}
              <Cross
                src={item.src}
                onRemove={() => handleRemoveItem(item.src)}
              />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const [showPromo, setShowPromo] = useState(false);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    setCart(parsedCart);
    setQuantities(parsedCart.map(() => 1));
  }, []);

  const togglePromo = () => {
    setShowPromo(!showPromo);
  };

  const toggleNote = () => {
    setShowNote(!showNote);
  };

  const handleRemoveItem = (src) => {
    const updatedItems = cart.filter((item) => item.src !== src);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCart(updatedItems);
    setQuantities(updatedItems.map(() => 1));
  };

  const totalPrice = cart.reduce(
    (acc, item, index) => acc + item.price * quantities[index],
    0
  );

  const totalItem = cart.length;

  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  localStorage.setItem("totalItem", JSON.stringify(totalItem));

  return (
    <div className="font-Syne max-w-[1520px] my-0 mx-auto mb-20 flex gap-20">
      <div className="w-3/4">
        <div>
          <Table>
            <TableHeader>
              <TableRow className="font-Syne text-[#071431] text-xl font-medium">
                <TableHead>My Cart</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Subtotal</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="font-Syne">
              {cart.length > 0 && (
                <TableIt
                  cart={cart}
                  quantities={quantities}
                  setQuantities={setQuantities}
                  handleRemoveItem={handleRemoveItem}
                />
              )}
              {cart.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-10 text-gray-500"
                  >
                    Your cart is empty.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-10">
          {/* Promo Section */}
          <div className="flex flex-col gap-15 relative">
            <button onClick={togglePromo} className="cursor-pointer flex gap-2">
              <img src={addtocarticon} />
              <p className="text-[#071431] text-lg underline">
                Enter a promo code
              </p>
            </button>

            {showPromo && (
              <div className="flex gap-15 items-center">
                <div className="flex relative">
                  <div className="outline-1 outline-[#071431] flex gap-2 items-center rounded-xl px-5 py-4">
                    <img src={addToCartProcode} />
                    <input
                      className="text-[#798090] outline-none"
                      type="text"
                      placeholder="Promo Code"
                    />
                  </div>
                  <div className="bg-[#B45C3D] rounded-2xl px-7 py-4 w-25 hover:scale-105 duration-300 cursor-pointer absolute -top-0.5 -right-10">
                    <button className="text-white text-xl">Apply</button>
                  </div>
                </div>

                <div className="outline-1 outline-[#071431] w-[32px] h-[32px] rounded-full cursor-pointer">
                  <button onClick={togglePromo}>
                    <img className="w-[32px] h-[32px] p-1" src={cross_icon} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Note Section */}
          <div className="flex flex-col gap-15">
            <div className="bg-[#B45C3D] rounded-2xl px-5 py-3 w-32 hover:scale-105 duration-300 cursor-pointer">
              <button className="text-white text-lg" onClick={toggleNote}>
                Add a note
              </button>
            </div>

            {showNote && (
              <div className="flex gap-15 items-center">
                <div className="flex relative">
                  <div className="outline-1 outline-[#071431] flex gap-2 items-center rounded-xl px-5 py-4">
                    <img src={addToCartNode} />
                    <input
                      className="text-[#798090] outline-none"
                      type="text"
                      placeholder="Enter Note"
                    />
                  </div>
                  <div className="bg-[#B45C3D] rounded-2xl px-7 py-4 w-25 hover:scale-105 duration-300 cursor-pointer absolute -top-0.5 -right-10">
                    <button className="text-white text-xl">Add</button>
                  </div>
                </div>

                <div className="outline-1 outline-[#071431] w-[32px] h-[32px] rounded-full cursor-pointer">
                  <button onClick={toggleNote}>
                    <img className="w-[32px] h-[32px] p-1" src={cross_icon} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-1/4 ">
        <p className="text-[#071431] text-lg  font-semibold">Order Summary</p>

        <div className="bg-[#e7e8eb] rounded-lg outline-1 outline-[#DFE0E4] flex flex-col gap-3 p-3 mt-5">


          <div className="flex justify-between items-center bg-white rounded-lg p-3">
            <div className="flex gap-2 items-center">
              <img src={oderIcon1} />
              <div>
                <p className="text-[#798090]">Free</p>
                <p className="text-[#071431 text-lg]">Shipping</p>
              </div>
            </div>
            <div className="text-[#071431 text-lg]">
              {" "}
              <p>Bangladesh</p>
            </div>
          </div>

          <div className="border border-gray-300 mt-5">

          </div>

        

          <div className="flex items-center justify-between p-3">
            <p className="text-[#071431] text-xl ">Total Amount</p>
            <p className="text-[#071431] text-xl font-bold">$180</p>
          </div>

          <div className="bg-bg-btn-color py-3 px-4 rounded-3xl flex justify-center">
            <button className="flex items-center gap-2">
              <img src={oderIcon2} />
              <p className="text-[#071431] text-xl"> Checkout </p>
            </button>
          </div>


          <div className="bg-[#071431] py-3 px-4 rounded-3xl flex justify-center">
            <button className="flex items-center gap-2">
              <img src={oderIcon3} />
              <p className="text-white text-xl"> Pay</p>
            </button>
          </div>


        </div>




        <div className="flex items-center gap-2  justify-center mt-3">
          <img src={oderIcon5} />
          <p>Secure Checkout </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
