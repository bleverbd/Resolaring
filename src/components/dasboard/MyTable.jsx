import React, { useState } from "react";
import Modal from "@/components/dasboard/Modal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Status from "./Status";

const MyTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="font-Syne">
      <div>
        <Table>
          <TableHeader className="bg-[#071431] rounded-2xl">
            <TableRow>
              <TableHead className=" text-white text-lg   py-4 font-semibold">
                Order ID
              </TableHead>
              <TableHead className=" text-white  text-lg   py-4 font-semibold">
                Buyer Name
              </TableHead>
              <TableHead className=" text-white  text-lg   py-4 font-semibold">
                Product Name
              </TableHead>
              <TableHead className=" text-white  text-lg   py-4 font-semibold">
                Order Date
              </TableHead>
              <TableHead className=" text-white  text-lg py-4  font-semibold">
                Status{" "}
              </TableHead>
              <TableHead className=" text-white  text-lg  py-4  font-semibold">
                Action{" "}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className=" text-[#071431]  py-4 text-lg ">
                #10001
              </TableCell>
              <TableCell className=" text-[#071431]  py-4 text-lg">
                #10001
              </TableCell>
              <TableCell className=" text-[#071431]  py-4 text-lg">
                {"Solar Panel"}
              </TableCell>
              <TableCell className=" text-[#071431]  py-4 text-lg">
                {"31/12/24"}
              </TableCell>
              <TableCell className=" text-[#071431]  py-4 text-lg">
                <Status />
              </TableCell>

              <TableCell className=" text-[#071431]  py-4 text-lg">
               
                  <div className="cursor-pointer">
                    <button onClick={() => setIsModalOpen(true)} className="">
                      <p className="text-[#B45C3D] text-lg underline">
                        View Details
                      </p>
                    </button>

                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    ></Modal>
                  </div>

              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyTable;
