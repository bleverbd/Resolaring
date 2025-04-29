import React from "react";
import thick from "../../assets/overview/accountSetting/thik.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";

import { useState, useEffect } from "react";

const Address = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("address");
    return savedAddresses ? JSON.parse(savedAddresses) : [];
  });
  const [tempAddress, setTempAddress] = useState(null); 



  const singleAddress = (phone) => {
    const address = addresses.find((address) => address?.phone === phone);
    setTempAddress(address);
  };



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstname: "",
    },
  });

  useEffect(() => {
    if (tempAddress !== null) {
      reset({
        firstname: tempAddress.firstname || "",
        lastname: tempAddress.lastname || "",
        companyName:tempAddress.companyName || "",
        address1: tempAddress.address1 || "",
        address2: tempAddress.address2 || "",
        city: tempAddress.city || "",
        country: tempAddress.country || "",
        phone: tempAddress.phone || "",
        zip: tempAddress.zip || "",
      });
      
    }
  }, [tempAddress, reset]);



  const handleOpenDialog = () => {

    setTimeout(() => {
      reset({
        firstname: "",
        lastname: "",
        companyName: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        phone: "",
        zip: "",
      });
      setIsOpen(true);
    }, 0);
  };

  const handleOpenDialog1 = () => {
    reset();         
    setIsOpen1(true); 
  };



  const handleCancel = () => {
    reset();
    setIsOpen(false);
    setIsOpen1(false);
    setTempAddress(null)
  };



  const onSubmit = (data) => {
    console.log(data);
    saveToLocalStorage(data);
    setAddresses((prevAddresses) => [...prevAddresses, data]);

    reset();
    setIsOpen(false);
  };



  const editSubmit = (data) => {
    const address = getAddressFromLocalStorage();
    const updatedAddress = address.map((item) =>
      item.phone=== data.phone ? data : item
    );
    localStorage.setItem("address", JSON.stringify(updatedAddress));
    setAddresses(updatedAddress);
  
    reset();
    setIsOpen1(false);
  };




  const getAddressFromLocalStorage = () => {
    let address = [];
    const storedAddress = localStorage.getItem("address");
    if (storedAddress) {
      address = JSON.parse(storedAddress);
    }
    return address;
  };

  const saveToLocalStorage = (data) => {
    const address = getAddressFromLocalStorage();
    address.push(data);
    const saveStored = JSON.stringify(address);
    localStorage.setItem("address", saveStored);
  };



  const handleRemove = (phone) => {
    const address = getAddressFromLocalStorage();
    const updatedAddress = address.filter((item) => item.phone !== phone);
    localStorage.setItem("address", JSON.stringify(updatedAddress));
    setAddresses(updatedAddress);
  };

  return (
    <div>
      <div>
        <div className="w-1/2">
          <p className="text-[#071431] text-3xl font-semibold">My Addresses</p>
          <p className="text-[#6A7283] text-xl mt-2">
            Add and manage the addresses you use often.
          </p>
        </div>

        <hr className="mt-[48px]" />

        <div className="mt-[48px] text-[#6A7283] text-xl">
          {addresses.map((address, index) => (
            <div key={index} className="address-item">
              <p>
                {address.firstname} {address.lastname}
              </p>
              <p>{address.companyName}</p>
              <p>
                {address.address1}, {address.city}, {address.country}
              </p>
              <p>
                {address.zip} - {address.phone}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-12 items-center">
                  <div>
                    <Dialog open={isOpen1} onOpenChange={setIsOpen1}>
                      <DialogTrigger
                        className="hover:text-black  text-[#6A7283] text-xl underline cursor-pointer"
                        onClick={() => {
                          handleOpenDialog1();
                          singleAddress(address?.phone);
                        }}
                      >
                        Edit
                      </DialogTrigger>

                      <DialogContent>
                        <form
                          onSubmit={handleSubmit(editSubmit)}
                          className="px-5 w-[1060px]"
                        >
                          <p className="text-[#071431] text-3xl font-semibold mt-3">
                          Edit Your Address
                          </p>
                          <hr className="mt-5" />

                          <div className=" font-Syne flex flex-col gap-2 mt-3">
                            <div className="flex items-center justify-between gap-8">
                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  First name*
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none w-full "
                                    type="text"
                                    placeholder="First Name"
                                    {...register("firstname", {
                                      required: true,
                                    })}
                                  />
                                </div>
                                {errors.firstname && (
                                  <span className="text-red-500">
                                    This field is required
                                  </span>
                                )}
                              </div>

                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Last name*
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    defaultValue={tempAddress?.lastname}
                                    className="text-[#6A7283]  focus: outline-none w-full "
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastname", {
                                      required: true,
                                    })}
                                  />
                                </div>
                                {errors.lastname && (
                                  <span className="text-red-500">
                                    This field is required
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="w-full ">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                {" "}
                                Company name
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full"
                                  type="text"
                                  placeholder="Company Name"
                                  {...register("companyName", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.companyName && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>

                            <div className="w-full ">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                {" "}
                                Address
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full "
                                  type="text"
                                  placeholder="Enter Your Address"
                                  {...register("address1", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.address1 && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>

                            <div className="w-full ">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                {" "}
                                Address line-2
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full"
                                  type="text"
                                  placeholder="Enter Your Address Line 2"
                                  {...register("address2", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.address2 && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>

                            <div className="w-full ">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                {" "}
                                City
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full "
                                  type="text"
                                  placeholder="City Name"
                                  {...register("city", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.city && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>

                            <div className="w-full ">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                Country
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full"
                                  type="text"
                                  placeholder="Select Your Country"
                                  {...register("country", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.country && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>

                            <div className="flex items-center justify-between gap-8 ">
                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  Zip / Postal code
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none w-full "
                                    type="text"
                                    placeholder="123"
                                    {...register("zip", {
                                      required: true,
                                    })}
                                  />
                                </div>
                                {errors.zip && (
                                  <span className="text-red-500">
                                    This field is required
                                  </span>
                                )}
                              </div>

                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  Phone
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none w-full"
                                    type="tel"
                                    placeholder="014535856614556"
                                    {...register("phone", {
                                      required: true,
                                    })}
                                  />
                                </div>
                                {errors.phone && (
                                  <span className="text-red-500">
                                    This field is required
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex gap-2 items-center mt-2">
                              <input
                                className="w-5 h-5 accent-[#2FA75F]"
                                type="checkbox"
                              />
                              <label> Make this my default address</label>
                            </div>

                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}

                            <div className="flex gap-5 items-center justify-end w-full">
                              <div
                                className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer"
                                onClick={handleCancel}
                              >
                                <button className="text-[#071431] font-medium cursor-pointer">
                                  Cancel
                                </button>
                              </div>
                              <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                <input
                                  className="text-white font-medium cursor-pointer"
                                  type="submit"
                                  value="Edit Address"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div>
                    <button
                      onClick={() => handleRemove(address.phone)}
                      className="hover:text-black  text-[#6A7283] text-xl underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex gap-2  items-center ">
                  <img src={thick} />
                  <p className="text-[#6A7283]  text-xl">Default Address</p>
                </div>
              </div>
              <hr className="mt-[48px]" />
            </div>
          ))}
        </div>

        <div className="flex gap-6 flex-col items-center mt-18">
          <div className="">
            <p className="text-[#071431] text-2xl">
              You haven't saved any addresses yet.
            </p>
          </div>

          <div className="cursor-pointer bg-[#B45C3D] px-8 py-4 rounded-4xl">
            <button className="cursor-pointer text-white">
              <div>
                <button onClick={handleOpenDialog}>Add New Address</button>
                {isOpen && (
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger
                      className="text-white cursor-pointer"
                      onClick={handleOpenDialog}
                    >
                      Add New Address
                    </DialogTrigger>

                    <DialogContent>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="px-5 w-[1060px]"
                      >
                        <p className="text-[#071431] text-3xl font-semibold mt-3">
                          Add New Address
                        </p>
                        <hr className="mt-5" />

                        <div className=" font-Syne flex flex-col gap-2 mt-3">
                          <div className="flex items-center justify-between gap-8">
                            <div className="w-1/2">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                First name*
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full "
                                  type="text"
                                  placeholder="First Name"
                                  {...register("firstname", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.firstname && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>

                            <div className="w-1/2">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                {" "}
                                Last name*
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full "
                                  type="text"
                                  placeholder="Last Name"
                                  {...register("lastname", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.lastname && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="w-full ">
                            <label className="text-[#0B0B0B] text-lg  font-semibold">
                              {" "}
                              Company name
                            </label>
                            <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                              <input
                                className="text-[#6A7283]  focus: outline-none w-full"
                                type="text"
                                placeholder="Company Name"
                                {...register("companyName", {
                                  required: true,
                                })}
                              />
                            </div>
                            {errors.companyName && (
                              <span className="text-red-500">
                                This field is required
                              </span>
                            )}
                          </div>

                          <div className="w-full ">
                            <label className="text-[#0B0B0B] text-lg  font-semibold">
                              {" "}
                              Address
                            </label>
                            <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                              <input
                                className="text-[#6A7283]  focus: outline-none w-full "
                                type="text"
                                placeholder="Enter Your Address"
                                {...register("address1", {
                                  required: true,
                                })}
                              />
                            </div>
                            {errors.address1 && (
                              <span className="text-red-500">
                                This field is required
                              </span>
                            )}
                          </div>

                          <div className="w-full ">
                            <label className="text-[#0B0B0B] text-lg  font-semibold">
                              {" "}
                              Address line-2
                            </label>
                            <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                              <input
                                className="text-[#6A7283]  focus: outline-none w-full"
                                type="text"
                                placeholder="Enter Your Address Line 2"
                                {...register("address2", {
                                  required: true,
                                })}
                              />
                            </div>
                            {errors.address2 && (
                              <span className="text-red-500">
                                This field is required
                              </span>
                            )}
                          </div>

                          <div className="w-full ">
                            <label className="text-[#0B0B0B] text-lg  font-semibold">
                              {" "}
                              City
                            </label>
                            <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                              <input
                                className="text-[#6A7283]  focus: outline-none w-full "
                                type="text"
                                placeholder="City Name"
                                {...register("city", {
                                  required: true,
                                })}
                              />
                            </div>
                            {errors.city && (
                              <span className="text-red-500">
                                This field is required
                              </span>
                            )}
                          </div>

                          <div className="w-full ">
                            <label className="text-[#0B0B0B] text-lg  font-semibold">
                              Country
                            </label>
                            <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                              <input
                                className="text-[#6A7283]  focus: outline-none w-full"
                                type="text"
                                placeholder="Select Your Country"
                                {...register("country", {
                                  required: true,
                                })}
                              />
                            </div>
                            {errors.country && (
                              <span className="text-red-500">
                                This field is required
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between gap-8 ">
                            <div className="w-1/2">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                Zip / Postal code
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full "
                                  type="text"
                                  placeholder="123"
                                  {...register("zip", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.zip && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>

                            <div className="w-1/2">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                Phone
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none w-full"
                                  type="tel"
                                  placeholder="014535856614556"
                                  {...register("phone", {
                                    required: true,
                                  })}
                                />
                              </div>
                              {errors.phone && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2 items-center mt-2">
                            <input
                              className="w-5 h-5 accent-[#2FA75F]"
                              type="checkbox"
                            />
                            <label> Make this my default address</label>
                          </div>

                          {errors.exampleRequired && (
                            <span>This field is required</span>
                          )}

                          <div className="flex gap-5 items-center justify-end w-full">
                            <div
                              className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer"
                              onClick={handleCancel}
                            >
                              <button className="text-[#071431] font-medium cursor-pointer">
                                Cancel
                              </button>
                            </div>
                            <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                              <input
                                className="text-white font-medium cursor-pointer"
                                type="submit"
                                value="Add New Address"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
