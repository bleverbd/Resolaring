import React from "react";
import { useState } from "react";
import eye_icon1 from "../../assets/eye_icon.svg";
import eye_icon from "../../assets/ey_icon.svg";
import plusicon from "../../assets/overview/accountSetting/plus.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import profile_pic from "../../assets/overview/accountSetting/profile_pic.png";
import crop from "../../assets/overview/accountSetting/crop.svg";
import deleted from "../../assets/overview/accountSetting/delete.svg";
import icon from "../../assets/overview/accountSetting/icon.svg";
import thick from "../../assets/overview/accountSetting/thik.svg";
import paypal from "../../assets/overview/accountSetting/paypal.svg";
import visa from "../../assets/overview/accountSetting/express.svg";
import express from "../../assets/overview/accountSetting/visa.svg";
import master from "../../assets/overview/accountSetting/master.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AccountSettings = () => {
  const [showPassword, setshowPassword] = useState(false);
  const TogglePassword = () => {
    setshowPassword(!showPassword);
  };

  const [showPassword2, setshowPassword2] = useState(false);
  const TogglePassword2 = () => {
    setshowPassword2(!showPassword2);
  };

  const [showPassword3, setshowPassword3] = useState(false);
  const TogglePassword3 = () => {
    setshowPassword3(!showPassword3);
  };
  return (
    <div className="font-Syne m-10">
      <div>
        <div className="mt-[48px]">
          <p className="text-[#071431] text-[40px] font-semibold">
            Account Settings
          </p>
        </div>
        <div className="mt-[48px]">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="font-Syne  flex items-center gap-16 bg-white">
              <TabsTrigger
                value="account"
                className="text-[#071431] text-2xl font-Syne"
              >
                My Account
              </TabsTrigger>
              <TabsTrigger
                value="addresses"
                className="text-[#071431] text-2xl font-Syne"
              >
                My Addresses
              </TabsTrigger>
              <TabsTrigger
                value="wallet"
                className="text-[#071431] text-2xl font-Syne"
              >
                My Wallet
              </TabsTrigger>
            </TabsList>
            <hr className="mt-3" />

            <TabsContent value="account" className=" font-Syne mt-5 w-full">
              <div>
                {/* Account */}
                <div className="flex items-center gap-10">
                  <div className="w-1/2">
                    <p className="text-[#071431] text-3xl font-semibold">
                      {" "}
                      Account
                    </p>
                    <p className="text-[#6A7283]">
                      View and edit your personal info below.
                    </p>
                  </div>
                  <div className="flex gap-3 items-center w-1/2">
                    <div className="outline outline-[#071431] rounded-4xl px-5 py-3 cursor-pointer ">
                      <button className="text-[#071431] font-medium cursor-pointer">
                        Discard
                      </button>
                    </div>
                    <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                      <button className="text-white font-medium cursor-pointer">
                        Update Info
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="mt-[48px]" />
                {/* Display info */}
                <div className="mt-[48px]">
                  <div className="w-full">
                    <p className="text-[24px] font-semibold">Display info</p>
                    <p className="text-[#6A7283]">
                      This information will be visible to all members of this
                      site.
                    </p>
                  </div>

                  <div className=" flex gap-[48px] mt-8">
                    <div className="w-full">
                      <div>
                        <div>
                          {" "}
                          <p className="text-[#071431 font-lg]">Display Name</p>
                        </div>
                        <div className="bg-[#F5F6F7] border border-[#DFE0E4] rounded-md px-5 py-2 mt-2">
                          <input
                            className="text=[#6A7283] focus:outline-none"
                            type="text"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <p className="text-[#071431 font-lg]">Title</p>
                        <div className="bg-[#F5F6F7] border border-[#DFE0E4] rounded-md px-5 py-2 mt-2">
                          <input
                            className="text=[#6A7283] focus:outline-none"
                            type="text"
                            placeholder="Businessman"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-5 w-full">
                      <div className="flex items-center gap-2">
                        <p className="text-[#6A7283]">Profile image</p>
                        <img src={icon} />
                      </div>

                      <div className="relative">
                        <img
                          className="w-[100px] h-[100px] rounded-full "
                          src={profile_pic}
                        />

                        <div>
                          {" "}
                          <img
                            className="absolute top-11 left-2 cursor-pointer"
                            src={crop}
                          />
                        </div>
                        <div>
                          {" "}
                          <img
                            className="absolute top-11 left-19 cursor-pointer"
                            src={deleted}
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-[48px]" />

                {/*Personal info  */}
                <div>
                  <div className="mt-[48px]">
                    <div className="w-full">
                      <p className="text-[24px] font-semibold">
                        {" "}
                        Personal info{" "}
                      </p>
                      <p className="text-[#6A7283]">
                        Update your personal information.
                      </p>
                    </div>

                    <div className="mt-8 ">
                      <div className="grid grid-cols-2 gap-[48px] w-full">
                        <div>
                          <div>
                            <p className="text-[#071431 font-lg]">First name</p>
                          </div>
                          <div className="bg-[#F5F6F7] border border-[#DFE0E4] rounded-md px-5 py-2 mt-2">
                            <input
                              className="text=[#6A7283] focus:outline-none"
                              type="text"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <div>
                            <p className="text-[#071431 font-lg]">Last name</p>
                          </div>
                          <div className="bg-[#F5F6F7] border border-[#DFE0E4] rounded-md px-5 py-2 mt-2">
                            <input
                              className="text=[#6A7283] focus:outline-none"
                              type="text"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        <div className="">
                          <p className="text-[#071431 font-lg]">Phone</p>
                          <div className="bg-[#F5F6F7] border border-[#DFE0E4] rounded-md px-5 py-2 mt-2">
                            <input
                              className="text=[#6A7283] focus:outline-none"
                              type="tel"
                              placeholder="12456789786"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-8 flex justify-end">
                    <div className="flex gap-3 items-center w-1/2">
                      <div className="outline outline-[#071431] rounded-4xl px-5 py-3 cursor-pointer ">
                        <button className="text-[#071431] font-medium cursor-pointer">
                          Discard
                        </button>
                      </div>
                      <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                        <button className="text-white font-medium cursor-pointer">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mt-[48px]" />

                {/* Login info */}

                <div className="mt-[48px]">
                  <div className="w-full">
                    <p className="text-[24px] font-semibold">Login info</p>
                    <p className="text-[#6A7283]">
                      View and update your login email and password.
                    </p>
                  </div>

                  <div className="mt-8  text-[#6A7283]">
                    <div className="flex gap-1 flex-col">
                      <div>
                        <p>Login email:</p>
                      </div>
                      <div>
                        <p>johndoe@gmail.com</p>
                      </div>

                      <div className="font-Syne">
                        <Dialog className="">
                          <DialogTrigger className="underline cursor-pointer hover:text-black ">
                            Change Email
                          </DialogTrigger>

                          <DialogContent className="w-[916px] p-10">
                            <div className="font-Syne flex flex-col gap-y-8 px-5 py-5">
                              <div className="">
                                <p className="text-[#071431] text-3xl font-semibold">
                                  Change login email
                                </p>
                                <p className="text-[#6A7283] w-full">
                                  This will be your new login email.
                                </p>
                              </div>

                              <div className="flex items-center gap-2  border border-[#F5F6F7] bg-[#F5F6F7] rounded-lg px-5 py-2  ">
                                <img src={icon} />

                                <p className="text-[#6A7283]">
                                  If you used Google or Facebook to log in, use
                                  this new email to continue logging in that
                                  way.
                                </p>
                              </div>

                              <div>
                                <label
                                  for="email"
                                  className="text-[#0B0B0B] font-semibold text-lg"
                                >
                                  New email
                                </label>
                                <input
                                  className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-lg font-medium text-sm"
                                  type="email"
                                  name="email"
                                  placeholder="johndoe@gmail.com"
                                  required
                                />
                              </div>

                              <div>
                                <label
                                  for="email"
                                  className="text-[#0B0B0B] font-semibold text-lg"
                                >
                                  Confirm new email
                                </label>
                                <input
                                  className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-lg font-medium text-sm"
                                  type="email"
                                  name="email"
                                  placeholder="johndoe@gmail.com"
                                  required
                                />
                              </div>

                              <div>
                                <label
                                  for="newpasspword"
                                  className="text-[#0B0B0B] font-semibold text-lg"
                                >
                                  Your Password
                                </label>
                                <div className=" relative">
                                  <input
                                    className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-lg font-medium text-sm"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                  />
                                  <div
                                    className="absolute top-4 right-5 "
                                    onClick={TogglePassword}
                                  >
                                    <img
                                      src={showPassword ? eye_icon : eye_icon1}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="text-[#6A7283] hover:text-black hover:underline">
                                  Reset or create password
                                </p>
                              </div>

                              <div className="flex gap-5 items-center justify-end w-full">
                                <div className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer ">
                                  <button className="text-[#071431] font-medium cursor-pointer">
                                    Cancel
                                  </button>
                                </div>
                                <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                  <button className="text-white font-medium cursor-pointer">
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    <div className="flex gap-1 flex-col mt-8">
                      <div>
                        <p>Password:</p>
                      </div>
                      <div>
                        <p>*****************</p>
                      </div>
                      <div className="font-Syne">
                        <Dialog className="">
                          <DialogTrigger className="underline cursor-pointer hover:text-black ">
                            Change password
                          </DialogTrigger>

                          <DialogContent className="w-[916px] p-10">
                            <div className="font-Syne flex flex-col gap-y-8 px-5 py-5">
                              <div className="">
                                <p className="text-[#071431] text-3xl font-semibold">
                                  Change password
                                </p>
                                <p className="text-[#6A7283] w-full">
                                  This will be your new login password.
                                </p>
                              </div>

                              <div>
                                <label
                                  for="newpasspword"
                                  className="text-[#0B0B0B] font-semibold text-lg"
                                >
                                  Your Password
                                </label>
                                <div className=" relative">
                                  <input
                                    className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-lg font-medium text-sm"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="******************"
                                    required
                                  />
                                  <div
                                    className="absolute top-4 right-5 "
                                    onClick={TogglePassword}
                                  >
                                    <img
                                      src={showPassword ? eye_icon : eye_icon1}
                                    />
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <p className="text-[#6A7283] hover:text-black hover:underline">
                                    Reset or create password
                                  </p>
                                </div>
                              </div>

                              <div>
                                <label
                                  for="newpasspword"
                                  className="text-[#0B0B0B] font-semibold text-lg"
                                >
                                  New Password
                                </label>
                                <div className=" relative">
                                  <input
                                    className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-lg font-medium text-sm"
                                    type={showPassword2 ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="******************"
                                    required
                                  />
                                  <div
                                    className="absolute top-4 right-5 "
                                    onClick={TogglePassword2}
                                  >
                                    <img
                                      src={showPassword2 ? eye_icon : eye_icon1}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  for="newpasspword"
                                  className="text-[#0B0B0B] font-semibold text-lg"
                                >
                                  Confirm Password
                                </label>
                                <div className=" relative">
                                  <input
                                    className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-lg font-medium text-sm"
                                    type={showPassword3 ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="******************"
                                    required
                                  />
                                  <div
                                    className="absolute top-4 right-5 "
                                    onClick={TogglePassword3}
                                  >
                                    <img
                                      src={showPassword3 ? eye_icon : eye_icon1}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-5 items-center justify-end w-full">
                                <div className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer ">
                                  <button className="text-[#071431] font-medium cursor-pointer">
                                    Cancel
                                  </button>
                                </div>
                                <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                  <button className="text-white font-medium cursor-pointer">
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mt-[48px]" />
                {/* Visibility and privacy */}
                <div className="mt-[48px]">
                  <div className="w-full">
                    <p className="text-[24px] font-semibold">
                      Visibility and privacy
                    </p>
                    <p className="text-[#6A7283]">
                      Update your personal information.
                    </p>
                  </div>

                  <div className="mt-6  text-[#6A7283]">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <p className="text-[#071431] text-lg">Profile URL</p>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            https://www.resolaring.es/en/profile/siddik-bdcalling/profile
                          </p>

                          <div className="font-Syne">
                            <Dialog className="">
                              <DialogTrigger className="underline cursor-pointer hover:text-black ">
                                Edit URL
                              </DialogTrigger>

                              <DialogContent className="w-[916px] p-10">
                                <div className="font-Syne flex flex-col gap-y-8 px-5 py-5">
                                  <div className="">
                                    <p className="text-[#071431] text-3xl font-semibold">
                                      Edit your profile URL
                                    </p>
                                    <p className="text-[#6A7283] w-full mt-2">
                                      This is a direct link to your profile page
                                      and other members can see it. Use letters
                                      and numbers only.
                                    </p>
                                  </div>

                                  <div>
                                    <label
                                      for="text"
                                      className="text-[#0B0B0B] font-semibold text-lg"
                                    >
                                      URL
                                    </label>
                                    <input
                                      className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-lg font-medium text-sm"
                                      type="text"
                                      name="email"
                                      placeholder="johndoe@gmail.com"
                                      required
                                    />
                                    <p className="text-[#6A7283] mt-2">
                                      https://www.resolaring.es/en/profile/
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-2  border border-[#F5F6F7] bg-[#F5F6F7] rounded-lg px-5 py-2  ">
                                    <img src={icon} />

                                    <p className="text-[#6A7283]">
                                      Once you change your profile URL, the
                                      previous one will stop working. Update the
                                      link wherever you use it.
                                    </p>
                                  </div>

                                  <div className="flex gap-5 items-center justify-end w-full">
                                    <div className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer ">
                                      <button className="text-[#071431] font-medium cursor-pointer">
                                        Cancel
                                      </button>
                                    </div>
                                    <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                      <button className="text-white font-medium cursor-pointer">
                                        Save Changes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <hr className="mt-[24px]" />

                    <div className="mt-6">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {" "}
                            <p className="text-[#071431] text-lg">
                              Privacy Policy
                            </p>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p>
                              Hide your profile page, and social aspects of your
                              account.
                            </p>

                            <div className="font-Syne">
                              <Dialog className="">
                                <DialogTrigger className="underline cursor-pointer hover:text-black ">
                                  Make Profile Private
                                </DialogTrigger>

                                <DialogContent className="w-[756px] p-10">
                                  <div className="font-Syne flex flex-col gap-y-8 px-5 py-5">
                                    <div className="">
                                      <p className="text-[#071431] text-3xl font-semibold">
                                        Set profile to private?
                                      </p>
                                      <p className="text-[#6A7283] w-full mt-2">
                                        Private profiles won’t be visible to
                                        other members and you won’t be able to
                                        interact with them.
                                      </p>
                                    </div>

                                    <div className="flex gap-5 items-center justify-end w-full">
                                      <div className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer ">
                                        <button className="text-[#071431] font-medium cursor-pointer">
                                          Cancel
                                        </button>
                                      </div>
                                      <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                        <button className="text-white font-medium cursor-pointer">
                                          Set Private
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    <hr className="mt-[24px]" />

                    <div className=" mt-6">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {" "}
                            <p className="text-[#071431] text-lg">
                              Block Members
                            </p>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p>You haven't blocked anyone.</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* End Of My Account  */}

            <TabsContent value="addresses" className=" font-Syne mt-5 w-full">
              <div>
                <div className="w-1/2">
                  <p className="text-[#071431] text-3xl font-semibold">
                    My Addresses
                  </p>
                  <p className="text-[#6A7283] text-xl mt-2">
                    Add and manage the addresses you use often.
                  </p>
                </div>

                <hr className="mt-[48px]" />

                <div className="mt-[48px] text-[#6A7283] text-xl">
                  John Doe <br />
                  Company name <br />
                  New York, 1212 <br />
                  USA <br />
                  +44 20 3769 7855 <br />
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-12 items-center">
                    <div>
                      <Dialog>
                        <DialogTrigger className="hover:text-black  text-[#6A7283] text-xl underline cursor-pointer">
                          Edit
                        </DialogTrigger>

                        <DialogContent>
                          <div className="px-5 w-[1060px]">
                            <p className="text-[#071431] text-3xl font-semibold mt-3">
                              Add New Address
                            </p>
                            <hr className="mt-5" />

                            <div className=" font-Syne flex flex-col gap-2 mt-3">
                              <div className="flex items-center justify-between gap-8">
                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    {" "}
                                    First name*
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="text"
                                      placeholder="John"
                                    />
                                  </div>
                                </div>

                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    {" "}
                                    Last name*
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="text"
                                      placeholder="Doe"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Company name
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Company"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Address
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="New York"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Address line-2
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="New York"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  City
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="New York"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Country
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Bangladesh"
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between gap-8 ">
                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    {" "}
                                    Zip / Postal code
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="text"
                                      placeholder="123"
                                    />
                                  </div>
                                </div>

                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    Phone
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="tel"
                                      placeholder="014535856614556"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-2 items-center ">
                                <input
                                  className="w-5 h-5 accent-[#2FA75F]"
                                  type="checkbox"
                                />
                                <label> Make this my default address</label>
                              </div>
                              <div className="flex gap-5 items-center justify-end w-full">
                                <div className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer ">
                                  <button className="text-[#071431] font-medium cursor-pointer">
                                    Cancel
                                  </button>
                                </div>
                                <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                  <button className="text-white font-medium cursor-pointer">
                                    Add Address
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div>
                      <button className="hover:text-black  text-[#6A7283] text-xl underline cursor-pointer">
                        {" "}
                        Remove{" "}
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2  items-center ">
                    {" "}
                    <img src={thick} />
                    <p className="text-[#6A7283]  text-xl">Default Address</p>
                  </div>
                </div>
                <div className="flex gap-6 flex-col items-center mt-18">
                  <div className="">
                    {" "}
                    <p className="text-[#071431] text-2xl">
                      You haven't saved any addresses yet.
                    </p>
                  </div>
                  <div className="cursor-pointer bg-[#B45C3D] px-8 py-4 rounded-4xl">
                    <button className="cursor-pointer text-white">
                      {" "}
                      Add New Address
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wallet">
              <div>
                <div className="w-1/2">
                  <p className="text-[#071431] text-3xl font-semibold">
                    Wallet
                  </p>
                  <p className="text-[#6A7283] text-xl mt-2">
                    Save your payment details for faster checkout.
                  </p>
                </div>

                <hr className="mt-[48px]" />

                <div className="mt-[48px] text-[#6A7283] text-xl">
                  John Doe <br />
                  Company name <br />
                  New York, 1212 <br />
                  USA <br />
                  +44 20 3769 7855 <br />
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-12 items-center">
                    <div>
                      <Dialog>
                        <DialogTrigger className="hover:text-black  text-[#6A7283] text-xl underline cursor-pointer">
                          Edit
                        </DialogTrigger>

                        <DialogContent>
                          <div className="px-5 w-[1060px]">
                            <p className="text-[#071431] text-3xl font-semibold mt-3">
                              Add New Address
                            </p>
                            <hr className="mt-5" />

                            <div className=" font-Syne flex flex-col gap-2 mt-3">
                              <div className="flex items-center justify-between gap-8">
                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    {" "}
                                    First name*
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="text"
                                      placeholder="John"
                                    />
                                  </div>
                                </div>

                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    {" "}
                                    Last name*
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="text"
                                      placeholder="Doe"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Company name
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Company"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Address
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="New York"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Address line-2
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="New York"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  City
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="New York"
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Country
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Bangladesh"
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between gap-8 ">
                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    {" "}
                                    Zip / Postal code
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="text"
                                      placeholder="123"
                                    />
                                  </div>
                                </div>

                                <div className="w-1/2">
                                  <label className="text-[#0B0B0B] text-lg  font-semibold">
                                    Phone
                                  </label>
                                  <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                    <input
                                      className="text-[#6A7283]  focus: outline-none "
                                      type="tel"
                                      placeholder="014535856614556"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-2 items-center ">
                                <input
                                  className="w-5 h-5 accent-[#2FA75F]"
                                  type="checkbox"
                                />
                                <label> Make this my default address</label>
                              </div>
                              <div className="flex gap-5 items-center justify-end w-full">
                                <div className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer ">
                                  <button className="text-[#071431] font-medium cursor-pointer">
                                    Cancel
                                  </button>
                                </div>
                                <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                  <button className="text-white font-medium cursor-pointer">
                                    Add Address
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div>
                      <button className="hover:text-black  text-[#6A7283] text-xl underline cursor-pointer">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2  items-center ">
                    <img src={thick} />
                    <p className="text-[#6A7283]  text-xl">Default Address</p>
                  </div>
                </div>

                <div className="flex gap-6 flex-col items-center mt-18">
                  <div className="">
                    <p className="text-[#071431] text-2xl">
                      You haven’t saved any payment methods yet
                    </p>
                    <p className="text-[#6A7283]">
                      {" "}
                      Securely save your payment details for faster checkout
                      whenever you place an order.
                    </p>
                  </div>
                  <div>
                    <Dialog>
                      <DialogTrigger>
                        <div className="cursor-pointer bg-[#B45C3D] px-8 py-4 rounded-4xl flex items-center gap-2">
                          <img src={plusicon} />
                          <button className="cursor-pointer text-white">
                            Add Payment Method
                          </button>
                        </div>
                      </DialogTrigger>

                      <DialogContent>
                        <div className="px-5 w-[1060px]">
                          <p className="text-[#071431] text-3xl font-semibold mt-3">
                            Add payment method
                          </p>
                          <hr className="mt-5" />

                          <div className=" font-Syne flex flex-col gap-2 mt-3">
                            <div className="flex items-center justify-between gap-8">
                              <div className="w-full ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  Card number
                                </label>

                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2 relative">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Enter number"
                                  />
                                  <div className="flex gap-2 items-center absolute top-3 right-5">
                                    <div>
                                      <img src={paypal} />
                                    </div>
                                    <div>
                                      <img src={master} />
                                    </div>
                                    <div>
                                      <img src={visa} />
                                    </div>
                                    <div>
                                      <img src={express} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-8 items-center">
                              <div className="w-1/2 ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  Expiration date
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="MM/YY"
                                  />
                                </div>
                              </div>

                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  CVV/CVC
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="3-4 digits"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="w-full ">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                {" "}
                                Cardholder name
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none "
                                  type="text"
                                  placeholder="Enter name"
                                />
                              </div>
                            </div>

                            <div className="w-full ">
                              <label className="text-[#0B0B0B] text-lg  font-semibold">
                                {" "}
                                Email
                              </label>
                              <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                <input
                                  className="text-[#6A7283]  focus: outline-none "
                                  type="email"
                                  placeholder="johndoe@gmail.com"
                                />
                              </div>
                            </div>

                            <div className="flex gap-8 items-center">
                              <div className="w-1/2 ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  First Name
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Enter Your Name"
                                  />
                                </div>
                              </div>

                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  Last Name
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Enter Your Last Name"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-8 items-center">
                              <div className="w-1/2 ">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  Address
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Enter Your Address"
                                  />
                                </div>
                              </div>

                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  City
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="Enter Your Last City"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-8 ">
                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  {" "}
                                  Country
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-2 rounded-lg mt-2 font-Syne font-medium text-lg">
                                  <Select defaultValue="bd">
                                    <SelectTrigger className=" flex w-full border-none shodow-none text-[#6A7283]">
                                      <SelectValue
                                        placeholder="Theme"
                                        className="text-[#6A7283]"
                                      />
                                    </SelectTrigger>

                                    <SelectContent className="focus:ring-0 h-screen overflow-y-auto">
                                      <SelectItem value="bd">
                                        Bangladesh
                                      </SelectItem>
                                      <SelectItem value="uk">
                                        United Kingdom
                                      </SelectItem>
                                      <SelectItem value="us">
                                        United States
                                      </SelectItem>
                                      <SelectItem value="ca">Canada</SelectItem>
                                      <SelectItem value="au">
                                        Australia
                                      </SelectItem>
                                      <SelectItem value="in">India</SelectItem>
                                      <SelectItem value="de">
                                        Germany
                                      </SelectItem>
                                      <SelectItem value="fr">France</SelectItem>
                                      <SelectItem value="jp">Japan</SelectItem>
                                      <SelectItem value="cn">China</SelectItem>
                                      <SelectItem value="br">Brazil</SelectItem>
                                      <SelectItem value="za">
                                        South Africa
                                      </SelectItem>
                                      <SelectItem value="ru">Russia</SelectItem>
                                      <SelectItem value="it">Italy</SelectItem>
                                      <SelectItem value="es">Spain</SelectItem>
                                      <SelectItem value="mx">Mexico</SelectItem>
                                      <SelectItem value="kr">
                                        South Korea
                                      </SelectItem>
                                      <SelectItem value="sa">
                                        Saudi Arabia
                                      </SelectItem>
                                      <SelectItem value="ar">
                                        Argentina
                                      </SelectItem>
                                      <SelectItem value="eg">Egypt</SelectItem>
                                      <SelectItem value="tr">Turkey</SelectItem>
                                      <SelectItem value="nl">
                                        Netherlands
                                      </SelectItem>
                                      <SelectItem value="se">Sweden</SelectItem>
                                      <SelectItem value="ch">
                                        Switzerland
                                      </SelectItem>
                                      <SelectItem value="no">Norway</SelectItem>
                                      <SelectItem value="be">
                                        Belgium
                                      </SelectItem>
                                      <SelectItem value="th">
                                        Thailand
                                      </SelectItem>
                                      <SelectItem value="ng">
                                        Nigeria
                                      </SelectItem>
                                      <SelectItem value="pk">
                                        Pakistan
                                      </SelectItem>
                                      <SelectItem value="ph">
                                        Philippines
                                      </SelectItem>
                                      <SelectItem value="pl">Poland</SelectItem>
                                      <SelectItem value="ua">
                                        Ukraine
                                      </SelectItem>
                                      <SelectItem value="my">
                                        Malaysia
                                      </SelectItem>
                                      <SelectItem value="id">
                                        Indonesia
                                      </SelectItem>
                                      <SelectItem value="vn">
                                        Vietnam
                                      </SelectItem>
                                      <SelectItem value="ir">Iran</SelectItem>
                                      <SelectItem value="iq">Iraq</SelectItem>
                                      <SelectItem value="ae">
                                        United Arab Emirates
                                      </SelectItem>
                                      <SelectItem value="nz">
                                        New Zealand
                                      </SelectItem>
                                      <SelectItem value="dk">
                                        Denmark
                                      </SelectItem>
                                      <SelectItem value="at">
                                        Austria
                                      </SelectItem>
                                      <SelectItem value="gr">Greece</SelectItem>
                                      <SelectItem value="cz">
                                        Czech Republic
                                      </SelectItem>
                                      <SelectItem value="hu">
                                        Hungary
                                      </SelectItem>
                                      <SelectItem value="ro">
                                        Romania
                                      </SelectItem>
                                      <SelectItem value="pt">
                                        Portugal
                                      </SelectItem>
                                      <SelectItem value="il">Israel</SelectItem>
                                      <SelectItem value="sg">
                                        Singapore
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                {/* <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="text"
                                    placeholder="USA"
                                  />
                                  </div> */}
                              </div>

                              <div className="w-1/2">
                                <label className="text-[#0B0B0B] text-lg  font-semibold">
                                  Postal Code
                                </label>
                                <div className="bg-[#F5F6F7] border border-[#DFE0E4] px-5 py-3 rounded-lg mt-2">
                                  <input
                                    className="text-[#6A7283]  focus: outline-none "
                                    type="tel"
                                    placeholder="12456"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-5 items-center justify-end w-full mt-2">
                              <div className="outline outline-[#071431] rounded-4xl px-8 py-3 cursor-pointer ">
                                <button className="text-[#071431] font-medium cursor-pointer">
                                  Cancel
                                </button>
                              </div>
                              <div className="rounded-4xl px-5 py-3 bg-[#B45C3D] cursor-pointer ">
                                <button className="text-white font-medium cursor-pointer">
                                  Add Payment Methods
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
