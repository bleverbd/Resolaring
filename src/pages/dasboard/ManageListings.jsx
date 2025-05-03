import Profile from "@/components/dasboard/Profile";
import SearchItem from "@/components/dasboard/SearchItem";
import React, { useEffect, useState } from "react";
import dot_icon from "../../assets/overview/manageList/dot_icon.svg";
import item_bg from "../../assets/overview/manageList/item_bg.png";
import edit from "../../assets/overview/manageList/edit.svg";
import del from "../../assets/overview/manageList/deleted.svg";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StatusManageList from "./StatusManageList";


const ManageListings = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const stored = localStorage.getItem("products");
  if (stored) {
    setProducts(JSON.parse(stored));
  }
}, []);


const handleDelete = (id) => {
  const updatedProducts = products.filter(product => product.id !== id);
  setProducts(updatedProducts);
  localStorage.setItem("products", JSON.stringify(updatedProducts));
};

  return (
    <div className="font-Syne mx-[48px] mt-[48px] mb-[72px]">
      {/* Top Nav */}
      <div className="flex justify-between items-center">
        <p className="text-[#071431] text-[40px] font-semibold">
          Manage Listings
        </p>
        <div className="flex gap-10">
          <SearchItem />
          <Profile />
        </div>
      </div>

      <div className="mt-12">
        <div>
          <p className="text-[£071431] text-3xl font-semibold">Listing</p>
        </div>

        <div className="mt-6">
        
            <Table>
              <TableHeader className="bg-[#071431] ">
                <TableRow>
                  <TableHead className="text-white px-10 py-4 text-lg font-semibold">
                    Product Image
                  </TableHead>
                  <TableHead className="text-white px-10 py-4 text-lg font-semibold">
                    Title
                  </TableHead>
                  <TableHead className="text-white px-10 py-4 text-lg font-semibold">
                    Price
                  </TableHead>
                  <TableHead className="text-white px-10 py-4 text-lg font-semibold">
                    Status
                  </TableHead>
                  <TableHead className="text-white px-10 py-4 text-lg font-semibold">
                    Actions{" "}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {products.map((product) => (
                <TableRow>
                  <TableCell>
                    <div className="px-10 py-4">
                      <img
                        className=" w-[112px] h-[70px] rounded-sm"
                        src={product.image}
                      />
                    </div>
                  </TableCell>

                  <TableCell className=" px-10 py-4 text-[#071431] text-lg">
                    {product.title}
                  </TableCell>

                  <TableCell className=" px-10 py-4 text-[#071431] text-lg">
                    {product.price}
                  </TableCell>

                  <TableCell>
                    <StatusManageList States={product.status} />
                  </TableCell>

                  <TableCell>
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <div className="px-10 py-4">
                            <img src={dot_icon} />
                          </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <div className="flex gap-2">
                              <img src={edit} />
                              <p className="text-[#6A7283] font-Syne font-medium text-lg">
                                Edit
                              </p>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDelete(product.id)}>
                            <div className="flex gap-2">
                              <img src={del} />
                              <p className="text-[#6A7283] font-Syne font-medium text-lg">
                                Delete
                              </p>
                            </div>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table>
         
        </div>
      </div>
    </div>
  );
};

export default ManageListings;
