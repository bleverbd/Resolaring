import Addbtn from "@/components/dasboard/Addbtn";
import Profile from "@/components/dasboard/Profile";
import SearchItem from "@/components/dasboard/SearchItem";
import React, { useState } from "react";
import Modal from "@/components/dasboard/Modal";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Status from "@/components/dasboard/Status";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const orders = [
  {
    orderId: "#10001",
    date: "01/12/2025",
    productName: "Wireless Mouse",
    buyerName: "John Doe",
    email: "john@example.com",
    phone: "+1 555-123-4567",
    country: "USA",
    city: "New York",
    zipCode: "10001",
    state: "NY",
    deliveryAddress: "123 Main St, Apt 4B",
    shippingFee: "$5.00",
    profilePicture: "https://i.pravatar.cc/150?u=john.doe",
    status: "Completed",
  },
  {
    orderId: "#10002",
    date: "02/12/2025",
    productName: "Bluetooth Speaker",
    buyerName: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 555-234-5678",
    country: "USA",
    city: "Los Angeles",
    zipCode: "90001",
    state: "CA",
    deliveryAddress: "456 Elm St, Unit 10",
    shippingFee: "$7.50",
    profilePicture: "https://i.pravatar.cc/150?u=jane.smith",
    status: "Shipped",
  },
  {
    orderId: "#10003",
    date: "03/12/2025",
    productName: "Smart Watch",
    buyerName: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 555-345-6789",
    country: "USA",
    city: "Chicago",
    zipCode: "60601",
    state: "IL",
    deliveryAddress: "789 Oak St",
    shippingFee: "$6.00",
    profilePicture: "https://i.pravatar.cc/150?u=alice.johnson",
    status: "Pending",
  },
  {
    orderId: "#10004",
    date: "04/12/2025",
    productName: "Laptop Stand",
    buyerName: "Bob Williams",
    email: "bob@example.com",
    phone: "+1 555-456-7890",
    country: "USA",
    city: "Houston",
    zipCode: "77001",
    state: "TX",
    deliveryAddress: "321 Pine St",
    shippingFee: "$8.00",
    profilePicture: "https://i.pravatar.cc/150?u=bob.williams",
    status: "Shipped",
  },
  {
    orderId: "#10005",
    date: "05/12/2025",
    productName: "USB-C Hub",
    buyerName: "Chris Evans",
    email: "chris@example.com",
    phone: "+1 555-567-8901",
    country: "USA",
    city: "Phoenix",
    zipCode: "85001",
    state: "AZ",
    deliveryAddress: "654 Maple St",
    shippingFee: "$5.00",
    profilePicture: "https://i.pravatar.cc/150?u=chris.evans",
    status: "Completed",
  },
  {
    orderId: "#10006",
    date: "06/12/2025",
    productName: "Noise Cancelling Headphones",
    buyerName: "Diana Prince",
    email: "diana@example.com",
    phone: "+1 555-678-9012",
    country: "USA",
    city: "San Diego",
    zipCode: "92101",
    state: "CA",
    deliveryAddress: "987 Birch St",
    shippingFee: "$9.00",
    profilePicture: "https://i.pravatar.cc/150?u=diana.prince",
    status: "Shipped",
  },
  {
    orderId: "#10007",
    date: "07/12/2025",
    productName: "External Hard Drive",
    buyerName: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "+1 555-789-0123",
    country: "USA",
    city: "Dallas",
    zipCode: "75201",
    state: "TX",
    deliveryAddress: "246 Cedar St",
    shippingFee: "$6.50",
    profilePicture: "https://i.pravatar.cc/150?u=ethan.hunt",
    status: "Pending",
  },
  {
    orderId: "#10008",
    date: "08/12/2025",
    productName: "Gaming Keyboard",
    buyerName: "Fiona Gallagher",
    email: "fiona@example.com",
    phone: "+1 555-890-1234",
    country: "USA",
    city: "San Jose",
    zipCode: "95101",
    state: "CA",
    deliveryAddress: "135 Walnut St",
    shippingFee: "$7.00",
    profilePicture: "https://i.pravatar.cc/150?u=fiona.gallagher",
    status: "Shipped",
  },
  {
    orderId: "#10009",
    date: "09/12/2025",
    productName: "Gaming Mouse",
    buyerName: "George Clooney",
    email: "george@example.com",
    phone: "+1 555-901-2345",
    country: "USA",
    city: "Austin",
    zipCode: "73301",
    state: "TX",
    deliveryAddress: "579 Chestnut St",
    shippingFee: "$6.25",
    profilePicture: "https://i.pravatar.cc/150?u=george.clooney",
    status: "Completed",
  },
  {
    orderId: "#10010",
    date: "10/12/2025",
    productName: "Portable Monitor",
    buyerName: "Hannah Baker",
    email: "hannah@example.com",
    phone: "+1 555-012-3456",
    country: "USA",
    city: "Jacksonville",
    zipCode: "32099",
    state: "FL",
    deliveryAddress: "824 Cypress St",
    shippingFee: "$7.75",
    profilePicture: "https://i.pravatar.cc/150?u=hannah.baker",
    status: "Pending",
  },
  {
    orderId: "#10011",
    date: "11/12/2025",
    productName: "Mechanical Keyboard",
    buyerName: "Ian Wright",
    email: "ian@example.com",
    phone: "+1 555-123-9876",
    country: "USA",
    city: "San Francisco",
    zipCode: "94101",
    state: "CA",
    deliveryAddress: "912 Aspen St",
    shippingFee: "$9.50",
    profilePicture: "https://i.pravatar.cc/150?u=ian.wright",
    status: "Shipped",
  },
  {
    orderId: "#10012",
    date: "12/12/2025",
    productName: "Webcam",
    buyerName: "Julia Roberts",
    email: "julia@example.com",
    phone: "+1 555-234-8765",
    country: "USA",
    city: "Fort Worth",
    zipCode: "76101",
    state: "TX",
    deliveryAddress: "354 Redwood St",
    shippingFee: "$4.25",
    profilePicture: "https://i.pravatar.cc/150?u=julia.roberts",
    status: "Pending",
  },
  {
    orderId: "#10013",
    date: "13/12/2025",
    productName: "Tripod Stand",
    buyerName: "Kevin Hart",
    email: "kevin@example.com",
    phone: "+1 555-345-7654",
    country: "USA",
    city: "Columbus",
    zipCode: "43004",
    state: "OH",
    deliveryAddress: "678 Poplar St",
    shippingFee: "$5.75",
    profilePicture: "https://i.pravatar.cc/150?u=kevin.hart",
    status: "Completed",
  },
  {
    orderId: "#10014",
    date: "14/12/2025",
    productName: "Graphic Tablet",
    buyerName: "Laura Palmer",
    email: "laura@example.com",
    phone: "+1 555-456-6543",
    country: "USA",
    city: "Charlotte",
    zipCode: "28201",
    state: "NC",
    deliveryAddress: "321 Sycamore St",
    shippingFee: "$6.50",
    profilePicture: "https://i.pravatar.cc/150?u=laura.palmer",
    status: "Shipped",
  },
  {
    orderId: "#10015",
    date: "15/12/2025",
    productName: "Desk Lamp",
    buyerName: "Mike Ross",
    email: "mike@example.com",
    phone: "+1 555-567-5432",
    country: "USA",
    city: "Detroit",
    zipCode: "48201",
    state: "MI",
    deliveryAddress: "912 Oakwood St",
    shippingFee: "$6.00",
    profilePicture: "https://i.pravatar.cc/150?u=mike.ross",
    status: "Pending",
  },
  {
    orderId: "#10016",
    date: "16/12/2025",
    productName: "Electric Kettle",
    buyerName: "Nina Turner",
    email: "nina@example.com",
    phone: "+1 555-678-4321",
    country: "USA",
    city: "Seattle",
    zipCode: "98101",
    state: "WA",
    deliveryAddress: "246 Maple Ave",
    shippingFee: "$5.00",
    profilePicture: "https://i.pravatar.cc/150?u=nina.turner",
    status: "Completed",
  },
  {
    orderId: "#10017",
    date: "17/12/2025",
    productName: "Cordless Vacuum",
    buyerName: "Oscar Wilde",
    email: "oscar@example.com",
    phone: "+1 555-789-4321",
    country: "USA",
    city: "Miami",
    zipCode: "33101",
    state: "FL",
    deliveryAddress: "567 Palm St",
    shippingFee: "$7.00",
    profilePicture: "https://i.pravatar.cc/150?u=oscar.wilde",
    status: "Shipped",
  },
  {
    orderId: "#10018",
    date: "18/12/2025",
    productName: "Air Purifier",
    buyerName: "Penny Lane",
    email: "penny@example.com",
    phone: "+1 555-890-4321",
    country: "USA",
    city: "Boston",
    zipCode: "02108",
    state: "MA",
    deliveryAddress: "135 Pine St",
    shippingFee: "$9.25",
    profilePicture: "https://i.pravatar.cc/150?u=penny.lane",
    status: "Completed",
  },
  {
    orderId: "#10019",
    date: "19/12/2025",
    productName: "Digital Camera",
    buyerName: "Quincy Adams",
    email: "quincy@example.com",
    phone: "+1 555-901-5432",
    country: "USA",
    city: "Portland",
    zipCode: "97201",
    state: "OR",
    deliveryAddress: "908 Spruce St",
    shippingFee: "$10.00",
    profilePicture: "https://i.pravatar.cc/150?u=quincy.adams",
    status: "Shipped",
  },
  {
    orderId: "#10020",
    date: "20/12/2025",
    productName: "Electric Grill",
    buyerName: "Rita Hayworth",
    email: "rita@example.com",
    phone: "+1 555-012-5432",
    country: "USA",
    city: "Philadelphia",
    zipCode: "19103",
    state: "PA",
    deliveryAddress: "873 Cherry St",
    shippingFee: "$8.00",
    profilePicture: "https://i.pravatar.cc/150?u=rita.hayworth",
    status: "Pending",
  },
];

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const rowsPerPage = 5;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  return (
    <div className="font-Syne w-full pt-[48px] px-[48px]">
      <div className="flex flex-col gap-12">
        {/* Top Nav Bar */}
        <div className="hidden  xl:flex xl:items-center xl:justify-between">

          <div className="xl:hidden">
            <div>
              <p className="text-[#071431] font-semibold text-[40px]">
                Overview
              </p>
            </div>
            <div>
              <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div>
            <p className="text-[#071431] font-semibold text-[40px]">Overview</p>
          </div>

          <div className="flex items-center gap-5 ">
            <SearchItem />
            <Addbtn />
            <Profile />
          </div>
        </div>

        {/* Card Option */}
        <div className="xl:flex xl:items-center xl:gap-5 2xl:justify-between grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="bg-[#F8EFEC] rounded-xl px-6 py-6 w-full xl:w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Total Listing
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">{15}</p>
          </div>

          <div className="bg-[#FFF9E6] rounded-xl px-6 py-6 w-full xl:w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Pending Orders
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">{3}</p>
          </div>

          <div className="bg-[#EBF7EF] rounded-xl px-6 py-6 w-full xl:w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Sales Revenue
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">$5,000</p>
          </div>

          <div className="bg-[#FAEDFF] rounded-xl px-6 py-6 w-full xl:w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Profile Completion
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">90% Done</p>
          </div>
        </div>
        {/* Oder Table */}

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[#071431] font-semibold text-3xl">
              Order History
            </p>
          </div>

          <div class>
            <Table>
              <TableHeader className="bg-[#071431] overflow-hidden w-full">
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
                {orders.slice(startIndex, endIndex).map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className=" text-[#071431]  py-4 text-lg ">
                      {order.orderId}
                    </TableCell>
                    <TableCell className=" text-[#071431]  py-4 text-lg">
                      <div className="flex gap-2 items-center">
                        <div className="overflow-hidden">
                          <img
                            className="object-cover rounded-full w-[32px] h-[32px]"
                            src={order.profilePicture}
                          />
                        </div>
                        <div>
                          <p className="text-[#071431] font-medium text-lg">
                            {order.buyerName}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className=" text-[#071431]  py-4 text-lg">
                      {order.productName}
                    </TableCell>
                    <TableCell className=" text-[#071431]  py-4 text-lg">
                      {order.date}
                    </TableCell>

                    <TableCell className=" text-[#071431]  py-4 text-lg">
                      <div>
                        <Status States={order.status} />
                      </div>
                    </TableCell>

                    <TableCell className=" text-[#071431]  py-4 text-lg">
                      <div className="cursor-pointer">
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setIsModalOpen(true);
                          }}
                        >
                          <p className="text-[#B45C3D] text-lg underline cursor-pointer">
                            View Details
                          </p>
                        </button>

                        {isModalOpen && selectedOrder && (
                          <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            orderData={selectedOrder}
                          />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-2">
            {/* Pagenation */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      startIndex === 0
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                    onClick={() => {
                      setStartIndex(startIndex - rowsPerPage);
                      setEndIndex(endIndex - rowsPerPage);
                    }}
                  />
                </PaginationItem>

                {/* <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem> */}

                {Array.from({
                  length: Math.ceil(orders.length / rowsPerPage),
                }).map((_, pageIndex) => {
                  const pageNumber = pageIndex + 1;
                  const isActive = startIndex / rowsPerPage === pageIndex;

                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        className={`${
                          isActive
                            ? "bg-[#B45C3D]  text-white"
                            : " text-[#071431] border border-[#DFE0E4]  "
                        } px-3 py-3 w-[45px] h-[45px] rounded-lg transition font-Syne text-[22px] font-bold`}
                        onClick={() => {
                          setStartIndex(pageIndex * rowsPerPage);
                          setEndIndex((pageIndex + 1) * rowsPerPage);
                        }}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className={
                      endIndex >= orders.length
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                    onClick={() => {
                      setStartIndex(startIndex + rowsPerPage);
                      setEndIndex(endIndex + rowsPerPage);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
