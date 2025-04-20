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
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>

            <TableCell>
              <InIcon
                onCountChange={(newCount) => handleCountChange(index, newCount)}
              />
            </TableCell>

            <TableCell className="flex gap-3 mt-18">
              {subtotal}
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

  return (
    <div className="font-Syne max-w-[1520px] my-0 mx-auto">
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>My Cart</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
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

      <div className="mt-8 text-right pr-5 space-y-2">
        <p className="text-xl font-semibold">Total Items: {cart.length}</p>
        <p className="text-xl font-semibold">
          Total Price: ৳
          {cart.reduce(
            (acc, item, index) => acc + item.price * quantities[index],
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default Cart;

// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import InIcon from "@/components/InIcon";
// import Cross from "@/components/Cross";
// import addtocarticon from "../../assets/addtocart_icon.svg";
// import addToCartProcode from "../../assets/addtocart_icon2.svg";
// import addToCartNode from "../../assets/addtocart_icon4.svg";
// import cross_icon from "../../assets/cross_icon.svg";

// const getCartFromLocalStorage = () => {
//   let cart = [];
//   const storedCart = localStorage.getItem("cart");
//   if (storedCart) {
//     cart = JSON.parse(storedCart);
//   }
//   return cart;
// };

// // const TableIt = () => {
// //   const cart = getCartFromLocalStorage();
// //   const [quantities, setQuantities] = useState(cart.map(() => 1));

// //   const handleCountChange = (index, newCount) => {
// //     const updatedQuantities = [...quantities];
// //     updatedQuantities[index] = newCount;
// //     setQuantities(updatedQuantities);
// //   };

// //   return (
// //     <>
// //       {cart.map((item, index) => {
// //         const subtotal = item.price * quantities[index];
// //         return (
// //           <TableRow key={index}>
// //             <TableCell>
// //               <img
// //                 src={item.src}
// //                 alt={item.name}
// //                 className="w-[168px] h-[168px] object-cover rounded-xl"
// //               />
// //             </TableCell>
// //             <TableCell>{item.name}</TableCell>
// //             <TableCell>{item.price}</TableCell>

// //             <TableCell>
// //               <InIcon
// //                 onCountChange={(newCount) => handleCountChange(index, newCount)}
// //               />
// //             </TableCell>

// //             <TableCell className="flex gap-3 mt-18">
// //               {subtotal} {console.log(subtotal)} <Cross src={item.src} />
// //             </TableCell>
// //           </TableRow>
// //         );
// //       })}
// //     </>
// //   );
// // };

// const TableIt = ({ cart, quantities, setQuantities, handleRemoveItem }) => {
//   const handleCountChange = (index, newCount) => {
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = newCount;
//     setQuantities(updatedQuantities);
//   };

//   return (
//     <>
//       {cart.map((item, index) => {
//         const subtotal = item.price * quantities[index];
//         return (
//           <TableRow key={index}>
//             <TableCell>
//               <img
//                 src={item.src}
//                 alt={item.name}
//                 className="w-[168px] h-[168px] object-cover rounded-xl"
//               />
//             </TableCell>
//             <TableCell>{item.name}</TableCell>
//             <TableCell>{item.price}</TableCell>
//             <TableCell>
//               <InIcon onCountChange={(newCount) => handleCountChange(index, newCount)} />
//             </TableCell>
//             <TableCell className="flex gap-3 mt-18">
//               {subtotal}
//               <Cross src={item.src} onRemove={handleRemoveItem} />
//             </TableCell>
//           </TableRow>
//         );
//       })}
//     </>
//   );
// };

// const Cart = () => {
//   // const [showPromo, setShowPromo] = useState(false);
//   // const [showNote, setshowNote] = useState(false);

//   // const togglePromo = () => {
//   //   setShowPromo(!showPromo); // toggle true/false
//   // };

//   // const toggleNote = () => {
//   //   setshowNote(!showNote); // toggle true/false
//   // };

//   const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : [];
//   });
//   const [quantities, setQuantities] = useState(cart.map(() => 1));
//   const [showPromo, setShowPromo] = useState(false);
//   const [showNote, setshowNote] = useState(false);

//   const handleRemoveItem = (src) => {
//     const updatedCart = cart.filter(item => item.src !== src);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const togglePromo = () => setShowPromo(!showPromo);
//   const toggleNote = () => setshowNote(!showNote);

//   return (

//     <div className="font-Syne max-w-[1520px] my-0 mx-auto ">
//       <div>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="">My Card</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Price</TableHead>
//               <TableHead>Quantity</TableHead>
//               <TableHead>Subtotal</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             <TableIt />
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex items-center justify-between mt-10">

//         <div className="flex flex-col gap-15 relative" >
//           <div>
//             <button onClick={togglePromo} className="cursor-pointer flex gap-2">
//               {" "}
//               <img src={addtocarticon} />
//               <p className="text-[#071431] text-lg underline">
//                 Enter a promo code
//               </p>{" "}
//             </button>
//           </div>
//           <div className="">
//             {showPromo && (
//               <div className="flex gap-15 items-center">
//                 <div className="flex relative">
//                   <div className=" outline-1 outline-[#071431] flex gap-2 items-center rounded-xl px-5 py-4">
//                     <img src={addToCartProcode} />
//                     <input
//                       className="text-[#798090] outline-none"
//                       type="text"
//                       placeholder="Promo Code"
//                     />
//                   </div>

//                   <div className="bg-[#B45C3D] rounded-2xl px-7 py-4 w-25  hover:scale-105 duration-300 cursor-pointer absolute -top-0.5 -right-10">
//                     <button className="text-white text-xl cursor-pointer">
//                       {" "}
//                       Apply
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="outline-1 outline-[#071431] w-[32px] h-[32px] rounded-full cursor-pointer">
//                     <button className="cursor-pointer" onClick={togglePromo}>
//                       <img
//                         className=" w-[32px] h-[32px] p-1"
//                         src={cross_icon}
//                       />{" "}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col gap-15">
//           <div className="bg-[#B45C3D] rounded-2xl px-5 py-3 w-32 hover:scale-105 duration-300 cursor-pointer">
//             <button
//               className="text-white text-lg cursor-pointer"
//               onClick={toggleNote}
//             >
//               Add a note
//             </button>
//           </div>

//           <div>
//             {showNote && (
//               <div>
//                 <div className="flex gap-15 items-center">
//                   <div className="flex relative">
//                     <div className="outline-1 outline-[#071431] flex gap-2 items-center rounded-xl px-5 py-4">
//                       <img src={addToCartNode} />
//                       <input
//                         className="text-[#798090] outline-none"
//                         type="text"
//                         placeholder="Enter Note"
//                       />
//                     </div>

//                     <div className="bg-[#B45C3D] rounded-2xl px-7 py-4 w-25 hover:scale-105 duration-300 cursor-pointer absolute -top-0.5 -right-10">
//                       <button className="text-white text-xl cursor-pointer">
//                         Add
//                       </button>
//                     </div>
//                   </div>

//                   <div>
//                     <div className="outline-1 outline-[#071431] w-[32px] h-[32px] rounded-full cursor-pointer">
//                       <button onClick={toggleNote}>
//                         <img
//                           className="w-[32px] h-[32px] p-1"
//                           src={cross_icon}
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Cart;
