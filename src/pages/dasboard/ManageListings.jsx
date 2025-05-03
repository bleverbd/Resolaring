import Profile from "@/components/dasboard/Profile";
import SearchItem from "@/components/dasboard/SearchItem";
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

const ManageListings = () => {
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
              <TableRow >
                <TableHead  className="text-white px-10 py-4 text-lg font-semibold" >Product Image</TableHead>
                <TableHead className="text-white px-10 py-4 text-lg font-semibold">Title</TableHead>
                <TableHead className="text-white px-10 py-4 text-lg font-semibold">Price</TableHead>
                <TableHead className="text-white px-10 py-4 text-lg font-semibold">Status</TableHead>
                <TableHead className="text-white px-10 py-4 text-lg font-semibold">Actions  </TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell >INV001</TableCell>
                <TableCell>JA Solar 200W</TableCell>
                <TableCell>55,00 €</TableCell>
                <TableCell >Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageListings;
