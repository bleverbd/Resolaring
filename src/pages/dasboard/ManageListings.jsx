import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import dot_icon from "../../assets/overview/manageList/dot_icon.svg";
import edit from "../../assets/overview/manageList/edit.svg";
import del from "../../assets/overview/manageList/deleted.svg";
import image_icon from "../../assets/gallery/image_icon.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StatusManageList from "./StatusManageList";

const ManageListings = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id) => {
    setOpenMenu(null);
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleEdit = (product) => {
    setOpenMenu(null);
    setSelectedProduct({ ...product });
    setIsEditOpen(true);
  };

  const handleSave = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setIsEditOpen(false);
    setOpenMenu(null);
  };

  const handleCancel = () => {
    setIsEditOpen(false);
    setOpenMenu(null);
  };

  const toggleDropdown = (productId) => {
    setOpenMenu((prev) => (prev === productId ? null : productId));
  };

  return (
    <div className="font-Syne mx-[48px] mt-[48px] mb-[72px]">
      <div className="flex justify-between items-center">
        <p className="text-[#071431] text-[40px] font-semibold">
          Manage Listings
        </p>
      </div>

      <div className="mt-12">
        <p className="text-[#071431] text-3xl font-semibold">Listing</p>

        <div className="mt-6">
          <Table>
            <TableHeader className="bg-[#071431]">
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
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="px-10 py-4">
                    <img
                      className="w-[112px] h-[70px] rounded-sm"
                      src={product.image}
                      alt={product.title}
                    />
                  </TableCell>
                  <TableCell className="px-10 py-4">{product.title}</TableCell>
                  <TableCell className="px-10 py-4">{product.price}</TableCell>
                  <TableCell className="px-10 py-4">
                    <StatusManageList States={product.status} />
                  </TableCell>
                  <TableCell>
                    <DropdownMenu
                      open={openMenu === product.id}
                      onOpenChange={() => toggleDropdown(product.id)}
                    >
                      <DropdownMenuTrigger asChild>
                        <div className="px-10 py-4 cursor-pointer">
                          <img src={dot_icon} alt="menu" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleEdit(product)}>
                          <div className="flex gap-2">
                            <img src={edit} alt="edit" />
                            <p className="text-[#6A7283] font-Syne font-medium text-lg">
                              Edit
                            </p>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(product.id)}
                        >
                          <div className="flex gap-2">
                            <img src={del} alt="delete" />
                            <p className="text-[#6A7283] font-Syne font-medium text-lg">
                              Delete
                            </p>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog
        open={isEditOpen}
        onOpenChange={(open) => {
          setIsEditOpen(open);
          if (!open) setOpenMenu(null); // dialog বন্ধ হলে dropdown ও বন্ধ
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-semibold text-[#071431] text-3xl">Edit Product</DialogTitle>
          </DialogHeader>

          {selectedProduct && (
            <div className="space-y-4">
              <div className="w-[470px] mt-5">
                <label className="font-semibold text-[#071431] text-2xl">
                  Upload Media
                </label>

                <div className="mt-4 bg-[#F5F6F7] border border-dashed border-[#DFE0E4] rounded-sm h-[228px] flex flex-col items-center justify-center relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setSelectedProduct({
                            ...selectedProduct,
                            image: reader.result,
                          });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />

                  <div className="bg-[#B45C3D] rounded-4xl px-5 py-2 flex gap-2">
                    <img src={image_icon} />
                    <p className="text-white font-semibold">Select Photos</p>
                  </div>
                  <div>
                    <p className="text-[#1D2635] font-medium text-center">
                      or drag photos here
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[#0B0B0B] font-semibold text-lg">
                  Title:
                </label>
                <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
                  <input
                    type="text"
                    value={selectedProduct.title}
                    className="text-[#6A7283] w-full focus:outline-none"
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        title: e.target.value,
                      })
                    }
                    placeholder="Title"
                  />
                </div>
              </div>

              <div className="w-[470px] mt-5 ">
                <label className="text-[#0B0B0B] font-semibold text-lg">
                  Price:
                </label>
                <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
                  <input
                    type="text"
                    value={selectedProduct.price}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        price: e.target.value,
                      })
                    }
                    className="text-[#6A7283] w-full focus:outline-none"
                    placeholder="Price"
                  />
                </div>
              </div>

              <div className="w-[470px] mt-5 ">
                <label className="text-[#0B0B0B] font-semibold text-lg">
                  Status:
                </label>
                <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
                  <input
                    type="text"
                    value={selectedProduct.status}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        status: e.target.value,
                      })
                    }
                    className="text-[#6A7283] w-full focus:outline-none"
                    placeholder="Status"
                  />
                </div>
              </div>

              <div className="flex gap-3 items-center justify-end mt-12">
                <div className="outline outline-[#071431] rounded-4xl px-5 py-3 cursor-pointer ">
                  <button
                    onClick={handleCancel}
                    className="text-[#071431] font-medium cursor-pointer"
                  >
                    Discard
                  </button>
                </div>

                <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                  <button
                    onClick={handleSave}
                    className="text-white font-medium cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageListings;
