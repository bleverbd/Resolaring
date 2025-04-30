import React, { useRef, useEffect, useState } from "react";
import GalleryHero from "./GalleryHero";
import GalleryCart from "./GalleryCart";
import btn_icon from "../../assets/btn_icon.svg";
import cross_icon from "../../assets/cross_icon.svg";
import toast, { Toaster } from "react-hot-toast";
import mostrecent from "../../assets/gallery/mostrecent_icon.svg";

import bghobar from "../../assets/gallery/bgHobar.png";

import cartbg1 from "../../assets/gallery/cartbg.jpg";
import cartbg2 from "../../assets/gallery/bg1.png";
import cartbg3 from "../../assets/gallery/bg2.png";
import cartbg4 from "../../assets/gallery/bg3.png";
import cartbg5 from "../../assets/gallery/bg4.png";
import cartbg6 from "../../assets/gallery/bg5.png";
import image_icon from "../../assets/gallery/image_icon.svg";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ViewProductDetailes from "./ViewProductDetailes";

const products = [
  {
    id: 1,
    cartBackground: cartbg1,
    cartProfile: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    cartProfileName: "John Doe",
    productName: "JA Solar 200W",
    productDescription:
      "High-efficiency solar panel offering durable performance, ideal for sustainable energy solutions. Provides optimal energy output for both residential and commercial applications in various environmental conditions.",
    date: "20 Nov, 2024",
  },
  {
    id: 2,
    cartBackground: cartbg2,
    cartProfile: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    cartProfileName: "Jane Smith",
    productName: "Canadian Solar 400W",
    productDescription:
      "Reliable solar module that delivers excellent performance and efficiency. It is designed to withstand harsh weather conditions while offering high durability and long-term power generation for commercial use.",
    date: "21 Nov, 2024",
  },
  {
    id: 3,
    cartBackground: cartbg3,
    cartProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    cartProfileName: "Robert Miles",
    productName: "Trina Solar TSM-330",
    productDescription:
      "High-performance solar panel that ensures outstanding energy yield. It operates efficiently under various environmental conditions, making it an ideal choice for both residential and commercial solar setups.",
    date: "22 Nov, 2024",
  },
  {
    id: 4,
    cartBackground: cartbg4,
    cartProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    cartProfileName: "Emily Johnson",
    productName: "LONGi Solar LR4 450W",
    productDescription:
      "Solar panel with innovative technology that ensures long-term power output stability. Offers excellent efficiency and high energy yield even in challenging environmental conditions, making it perfect for large-scale installations.",
    date: "23 Nov, 2024",
  },
  {
    id: 5,
    cartBackground: cartbg5,
    cartProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    cartProfileName: "Michael Chen",
    productName: "REC Alpha Pure-R",
    productDescription:
      "A premium solar panel that delivers superior power density and efficiency. With high-performance capabilities, it is an ideal choice for both residential and commercial solar systems requiring long-term reliability.",
    date: "24 Nov, 2024",
  },
  {
    id: 6,
    cartBackground: cartbg6,
    cartProfile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
    cartProfileName: "Sophia Green",
    productName: "JA Solar 550W",
    productDescription:
      "Perfect for commercial and utility-scale applications, this solar panel delivers optimal efficiency and outstanding power output, making it a reliable choice for large solar installations with long-term durability.",
    date: "25 Nov, 2024",
  },
  {
    id: 7,
    cartBackground: cartbg1,
    cartProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    cartProfileName: "Daniel Cruz",
    productName: "Jinko Solar Tiger Neo",
    productDescription:
      "Top-tier solar panel with advanced N-type cell technology that ensures superior efficiency. Ideal for both residential and commercial use, delivering high energy output and excellent performance even in shaded conditions.",
    date: "26 Nov, 2024",
  },
  {
    id: 8,
    cartBackground: cartbg2,
    cartProfile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    cartProfileName: "Ava Patel",
    productName: "Q Cells Q.PEAK DUO",
    productDescription:
      "Solar module designed for excellent performance in low-light and shaded conditions. Known for its high efficiency, it is suitable for diverse installation environments, providing optimal energy output even in challenging conditions.",
    date: "27 Nov, 2024",
  },
  {
    id: 9,
    cartBackground: cartbg3,
    cartProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    cartProfileName: "Liam Brown",
    productName: "Panasonic EverVolt 360W",
    productDescription:
      "High-quality solar panel designed specifically for residential solar systems. Provides exceptional energy output and reliability, making it an ideal choice for homeowners looking to maximize solar energy savings and efficiency.",
    date: "28 Nov, 2024",
  },
  {
    id: 10,
    cartBackground: cartbg4,
    cartProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    cartProfileName: "Isabella Lee",
    productName: "First Solar Series 6",
    productDescription:
      "Thin-film solar panel offering excellent temperature performance. A durable and efficient choice for both residential and commercial solar power installations, designed to maximize energy production even in extreme heat conditions.",
    date: "29 Nov, 2024",
  },
  {
    id: 11,
    cartBackground: cartbg5,
    cartProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    cartProfileName: "James Wilson",
    productName: "SunPower Maxeon 6",
    productDescription:
      "Industry-leading solar panel that offers superior efficiency and durability. Ideal for high-performance solar systems, it provides excellent long-term energy output, ensuring optimal performance even after years of use.",
    date: "30 Nov, 2024",
  },
  {
    id: 12,
    cartBackground: cartbg6,
    cartProfile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    cartProfileName: "Mia Anderson",
    productName: "Seraphim Blade",
    productDescription:
      "Cutting-edge design with dual-glass module construction for enhanced durability. Offers superior energy production and efficiency, making it an excellent choice for both residential and commercial solar power applications.",
    date: "01 Dec, 2024",
  },
  {
    id: 13,
    cartBackground: cartbg1,
    cartProfile: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6",
    cartProfileName: "Lucas Martin",
    productName: "Astronergy 375W Mono",
    productDescription:
      "A reliable solar panel with competitive pricing and excellent performance. Suitable for both residential and commercial applications, it provides high efficiency and energy output, making it an attractive option for solar installations.",
    date: "02 Dec, 2024",
  },
  {
    id: 14,
    cartBackground: cartbg2,
    cartProfile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    cartProfileName: "Charlotte Davis",
    productName: "ZNShine Solar ZXM6",
    productDescription:
      "Smart solar modules designed with high transmittance glass, ensuring excellent performance and long-term durability. Ideal for both residential and commercial systems, these panels deliver efficient energy production even in low-light conditions.",
    date: "03 Dec, 2024",
  },
  {
    id: 15,
    cartBackground: cartbg3,
    cartProfile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    cartProfileName: "Benjamin Scott",
    productName: "Leapton Solar 370W",
    productDescription:
      "A high-performance solar panel featuring Japanese technology. It offers excellent long-term performance and superior energy efficiency, making it a trusted choice for residential and commercial solar power installations.",
    date: "04 Dec, 2024",
  },
  {
    id: 16,
    cartBackground: cartbg4,
    cartProfile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    cartProfileName: "Grace Taylor",
    productName: "Hanwha Q Cells Duo XL",
    productDescription:
      "High-capacity solar panel with outstanding yield and durability. Ideal for commercial and large-scale installations, this panel offers optimal performance and long-term efficiency in a variety of environmental conditions.",
    date: "05 Dec, 2024",
  },
  {
    id: 17,
    cartBackground: cartbg5,
    cartProfile: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    cartProfileName: "Elijah Moore",
    productName: "Axitec AC-420MH",
    productDescription:
      "An economical solar panel offering robust power output in real conditions. With excellent energy production and durability, it is suitable for a wide range of residential and commercial solar applications.",
    date: "06 Dec, 2024",
  },
  {
    id: 18,
    cartBackground: cartbg6,
    cartProfile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    cartProfileName: "Amelia Thomas",
    productName: "LG NeON R 380W",
    productDescription:
      "Premium solar panel offering exceptional performance and an elegant black design. Known for its high efficiency and durability, it is an ideal choice for homeowners and businesses seeking top-tier solar technology.",
    date: "07 Dec, 2024",
  },
  {
    id: 19,
    cartBackground: cartbg1,
    cartProfile: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    cartProfileName: "Matthew Jackson",
    productName: "Sharp ND-RK 300W",
    productDescription:
      "Compact and efficient solar panel ideal for smaller solar setups. This high-performance panel offers reliable energy output, making it perfect for residential installations with limited roof space.",
    date: "08 Dec, 2024",
  },
  {
    id: 20,
    cartBackground: cartbg2,
    cartProfile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    cartProfileName: "Ella Robinson",
    productName: "Talesun TP6 430W",
    productDescription:
      "Affordable and high-performance solar panel that delivers reliable energy output. With great efficiency and value for money, it is a solid choice for residential and commercial solar power applications.",
    date: "09 Dec, 2024",
  },
  {
    id: 21,
    cartBackground: cartbg2,
    cartProfile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    cartProfileName: "Ella Robinson",
    productName: "Talesun TP6 430W",
    productDescription:
      "Affordable and high-performance solar panel that delivers reliable energy output. With great efficiency and value for money, it is a solid choice for residential and commercial solar power applications.",
    date: "09 Dec, 2024",
  },
];

const Gallery = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    fileInputRef.current.value = null;
  };

  const handleUpload = () => {
    if (!preview || !title || !description) {
      toast.error("Please complete all fields before uploading.");
      return;
    }

    const mediaData = {
      image: preview,
      title,
      description,
      uploadedAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    const existing = JSON.parse(localStorage.getItem("uploadedMedia")) || [];
    const updatedData = [...existing, mediaData];
    localStorage.setItem("uploadedMedia", JSON.stringify(updatedData));

    // Format and update UI immediately
    const formattedData = updatedData.map((item, index) => ({
      id: index + 1,
      cartBackground: item.image,
      cartProfile:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
      cartProfileName: "Ella Robinson",
      productName: item.title,
      productDescription: item.description,
      date: item.uploadedAt,
    }));

    setProducts(formattedData);
    setCurrentPage(Math.ceil(formattedData.length / itemsPerPage)); // go to last page

    // Reset form
    setPreview(null);
    setTitle("");
    setDescription("");
    fileInputRef.current.value = null;
    toast.success("Media uploaded successfully!");
  };

  useEffect(() => {
    const rawData = JSON.parse(localStorage.getItem("uploadedMedia")) || [];
    const formattedData = rawData.map((item, index) => ({
      id: index + 1,
      cartBackground: item.image,
      cartProfile:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
      cartProfileName: "Ella Robinson",
      productName: item.title,
      productDescription: item.description,
      date: item.uploadedAt,
    }));
    setProducts(formattedData);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="font-Syne">
      <GalleryHero />
      <div className=" relative">
        <Toaster />
        <div>
          <div className="absolute -top-30 left-0 w-[180px] h-[220px]">
            <img className="w-[180px] h-[220px]" src={bghobar} />
          </div>

          <div className="absolute left-0 bottom-0 w-[220px] h-[180px]">
            <img className="w-[180px] h-[220px]" src={bghobar} />
          </div>

          <div className="absolute right-0 top-1/2 translate-y-[-50%] w-[190px] h-[220px]">
            <img className="w-[180px] h-[220px]" src={bghobar} />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mt-[120px] font-Syne max-w-[1520px] my-0 mx-auto">
            <div>
              <p className="text-[#071431] text-5xl font-semibold">
                Anuncia els teus panells solars
              </p>
            </div>

            <div className="flex items-center gap-8 ">
              <div className="flex gap-2 items-center">
                <div>
                <p className="text-[#6A7283] text-lg font-medium">Sort by:</p>
                </div>
                <div>
                  <Select defaultValue="recent">
                    <SelectTrigger className="border-none shadow-none focus-visible:ring-0 font-Syne text-[#6A7283] text-lg font-medium">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="font-Syne">
                      <SelectItem
                        value="recent"
                        className="font-Syne text-[#6A7283] text-lg font-medium"
                      >
                        Most recent
                      </SelectItem>
                      <SelectItem
                        value="liked"
                        className="font-Syne text-[#6A7283] text-lg font-medium"
                      >
                        Most liked
                      </SelectItem>
                      <SelectItem
                        value="Viewed"
                        className="font-Syne text-[#6A7283] text-lg font-medium"
                      >
                        Most Viewed
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="font-Syne">
                <Dialog className="font-Syne">
                  <div className="bg-[#B45C3D] px-5 py-2 rounded-4xl cursor-pointer">
                    <DialogTrigger className="text-white text-lg font-medium cursor-pointer">
                      Add Media
                    </DialogTrigger>
                  </div>

                  <DialogContent className="font-Syne w-2/4">
                    <div>
                      <p className="text-[#071431] text-2xl font-semibold">
                        Upload Media
                      </p>

                      <div
                        className="mt-4 border rounded-xl border-dashed border-[#DFE0E4] h-[150px] w-full "
                        onClick={handleDivClick}
                      >
                        <div className="flex gap-2 items-center mx-auto bg-[#B45C3D] rounded-4xl px-5 py-3 w-45 mt-8">
                          <img src={image_icon} />
                          <p className="text-white font-semibold">
                            Select Photos
                          </p>
                        </div>
                        <div className=" flex w-full">
                          <p className="text-[#1D263D] font-medium mx-auto">
                            or drag photos here
                          </p>
                        </div>
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>

                      {preview && (
                        <div className="mt-4 relative">
                          <img
                            src={preview}
                            alt="Preview"
                            className="max-w-[332px] h-[290px] rounded-xl mx-auto object-cover"
                          />
                          <button
                            onClick={handleRemoveImage}
                            className="absolute top-1 right-1 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200"
                          >
                            <img src={cross_icon} alt="cross" />
                          </button>
                        </div>
                      )}

                      {/* Preview Image */}

                      <div className="mt-6">
                        <div className="">
                          <label className="text-[#0B0B0B] font-semibold text-lg">
                            Title:
                          </label>
                        </div>

                        <div className="bg-[#F5F6F7]  mt-1 rounded-xl border border-[#DFE0E4] px-6 py-3">
                          <input
                            className=" text-[#6A7283] focus:outline-none w-full"
                            placeholder="Choose"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="">
                          <label className="text-[#0B0B0B] font-semibold text-lg ">
                            Description:
                          </label>
                        </div>

                        <div className="bg-[#F5F6F7] mt-1 rounded-xl border border-[#DFE0E4] px-6 py-3 h-30">
                          <input
                            className=" text-[#6A7283] focus:outline-none w-full"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Choose"
                          />
                        </div>
                      </div>

                      <div className="bg-bg-btn-color rounded-4xl px-7 py-3 flex justify-center mt-8 w-45 mx-auto">
                        <button
                          className="flex gap-2 items-center justify-center group cursor-pointer"
                          onClick={handleUpload}
                        >
                          <p className="text-[#071431] font-medium">
                            Upload Now
                          </p>
                          <img
                            className="group-hover:translate-x-2 duration-300"
                            src={btn_icon}
                            alt="btn_icon"
                          />
                        </button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className=" font-Syne max-w-[1520px] my-0 mx-auto grid grid-cols-4 gap-x-5 gap-y-0 mb-[48px]">
            {currentItems.map((product, index) => (
              <GalleryCart key={index} product={product} />
            ))}
          </div>

          <div className="mt-8 mb-[120px] pb-[48px] font-Syne">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                  />
                </PaginationItem>
                <PaginationItem>
                  {/* <PaginationLink href="#">1</PaginationLink> */}
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
      {/* <ViewProductDetailes/> */}
    </div>
  );
};

export default Gallery;
