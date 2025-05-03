import React from "react";
import image_icon from "../../assets/gallery/image_icon.svg";
import Profile from "@/components/dasboard/Profile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Btn from "@/components/Btn";

const solarCompanies = [
  { id: 1, value: "first-solar", item: "First Solar" },
  { id: 2, value: "longi-solar", item: "LONGi Solar" },
  { id: 3, value: "ja-solar", item: "JA Solar" },
  { id: 4, value: "trina-solar", item: "Trina Solar" },
  { id: 5, value: "canadian-solar", item: "Canadian Solar" },
  { id: 6, value: "q-cells", item: "Q CELLS" },
  { id: 7, value: "risen-energy", item: "Risen Energy" },
  { id: 8, value: "rec-group", item: "REC Group" },
  { id: 9, value: "sunpower", item: "SunPower" },
  { id: 10, value: "sungrow-power-supply", item: "Sungrow Power Supply" },
  { id: 11, value: "gcl-poly-energy", item: "GCL-Poly Energy" },
  { id: 12, value: "hanwha-q-cells", item: "Hanwha Q CELLS" },
  { id: 13, value: "sharp-solar", item: "Sharp Solar" },
  { id: 14, value: "panasonic", item: "Panasonic" },
  { id: 15, value: "jinkosolar", item: "JinkoSolar" },
  { id: 16, value: "longi-green-energy", item: "LONGi Green Energy" },
  { id: 17, value: "yingli-solar", item: "Yingli Solar" },
  { id: 18, value: "silfab-solar", item: "Silfab Solar" },
  { id: 19, value: "goodwe", item: "GoodWe" },
  { id: 20, value: "zhongtai-international", item: "Zhongtai International" },
];

const solarCategories = [
  { id: 1, value: "photovoltaic-panels", item: "Photovoltaic Panels" },
  { id: 2, value: "inverters", item: "Inverters" },
  { id: 3, value: "mounting-system", item: "Mounting System" },
  { id: 4, value: "batteries", item: "Batteries" },
  { id: 5, value: "measurement-equipment", item: "Measurement Equipment" }
];

const AddNewListing = () => {
  return (
    <div className="font-Syne mx-[48px] mt-[48px] mb-[72px]">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <p className="text-[#071431] text-[40px] font-semibold">
          Add New Listing
        </p>
        <Profile />
      </div>
      {/* Upload Media */}
      <div className="mt-[48px]">
        <label className="font-semibold text-[#071431] text-2xl">
          Upload Media
        </label>
        <div className="mt-4 bg-[#F5F6F7] border border-dashed border-[#DFE0E4] rounded-sm h-[228px] flex flex-col items-center justify-center">
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

      {/* Description */}
      <div className="mt-12">
        <p className="text-[#071431] text-2xl font-semibold"> Description</p>

        {/* Title: */}
        <div>
          <label className="text-[#0B0B0B] font-semibold text-lg">
            {" "}
            Title:
          </label>
          <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
            <input
              className="text-[#6A7283] w-full focus:outline-none"
              type="text"
              placeholder="Choose"
            />
          </div>
        </div>

        {/* Description */}

        <div className="mt-6">
          <label className="text-[#0B0B0B] font-semibold text-lg">
            {" "}
            Description:
          </label>
          <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 h-[198px] py-3">
            <input
              className="text-[#6A7283] w-full  focus:outline-none"
              type="text"
              placeholder="Choose"
            />
          </div>
        </div>

        {/* Brand Specifications Condition */}
        <div className="mt-6 flex items-center justify-between">
          {/* Brand */}
          <div className="w-[470px]">
            <label className="text-[#0B0B0B] font-semibold text-lg">
              Brand Name:
            </label>
            <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-2">
              {/* <input
                className="text-[#6A7283] w-full focus:outline-none"
                type="text"
                placeholder="Choose"
              /> */}
              <Select>
                <SelectTrigger className=" font-Syne text-[#6A7283] font-medium text-lg w-full border-none shadow-none focus-visible:ring-0">
                  <SelectValue className="" placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  {solarCompanies.map((company) => (
                    <SelectItem
                      className="font-Syne text-[#6A7283] font-medium text-lg"
                      key={company.id}
                      value={company.value}
                    >
                      {company.item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Specifications */}
          <div className="w-[470px]">
            <label className="text-[#0B0B0B] font-semibold text-lg">
              Specifications:
            </label>
            <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
              <input
                className="text-[#6A7283] w-full focus:outline-none"
                type="text"
                placeholder="Model name"
              />
            </div>
          </div>
          {/* Condition */}
          <div className="w-[470px]">
            <label className="text-[#0B0B0B] font-semibold text-lg">
              {" "}
              Condition:
            </label>
            <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-2">
              <Select>
                <SelectTrigger className=" font-Syne text-[#6A7283] font-medium text-lg w-full border-none shadow-none focus-visible:ring-0">
                  <SelectValue className="" placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="used">Used </SelectItem>
                <SelectItem value="New">New</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Pricing Options   */}
        <div className="mt-12">
        <div>
        <p className="text-[#071431] text-2xl">Pricing Options  </p>
        </div>

         <div className="flex items-center justify-between">
         <div className="w-[470px] mt-5 ">
            <label className="text-[#0B0B0B] font-semibold text-lg">
            Price:
            </label>
            <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
              <input
                className="text-[#6A7283] w-full focus:outline-none"
                type="text"
                placeholder="Price"
              />
            </div>
          </div>

          <div className="w-[470px] mt-5">
            <label className="text-[#0B0B0B] font-semibold text-lg">
            Discounts: <span className="text-[#B2B6BF] text-lg font-semibold" >(Optional)</span>
            </label>
            <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
              <input
                className="text-[#6A7283] w-full focus:outline-none"
                type="text"
                placeholder="Price"
              />
            </div>
          </div>

          <div className="w-[470px] mt-5">
            <label className="text-[#0B0B0B] font-semibold text-lg">
            Shipping Cost:
            </label>
            <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-3">
              <input
                className="text-[#6A7283] w-full focus:outline-none"
                type="text"
                placeholder="Price"
              />
            </div>
          </div>
         </div>


        </div>



        {/* Category Selection */}
        <div className="mt-12">
        <div>
        <p className="text-[#071431] text-2xl">Category Selection </p>
        </div>

         <div className="flex items-center justify-between">
         <div className="w-full mt-5 ">
            <label className="text-[#0B0B0B] font-semibold text-lg">
            Categorize products:
            </label>
            <div className="mt-1 bg-[#F5F6F7] border-[#DFE0E4] rounded-sm px-5 py-2">
            <Select>
                <SelectTrigger className=" font-Syne text-[#6A7283] font-medium text-lg w-full border-none shadow-none focus-visible:ring-0">
                  <SelectValue className="" placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  {solarCategories.map(category=>(
                    <SelectItem className="font-Syne text-[#6A7283] font-medium text-lg " key={category.id} value={category.value}>{category.item}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
            </div>
          </div>

          
         </div>


        </div>





      </div>

      {/* Button */}
      <div className="mt-12 w-45 mx-auto">
        <Btn  buttonTitle={"Submit"}/>

      </div>
    </div>
  );
};

export default AddNewListing;
