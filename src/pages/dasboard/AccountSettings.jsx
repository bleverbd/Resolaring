import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import profile_pic from "../../assets/overview/accountSetting/profile_pic.png";
import crop from "../../assets/overview/accountSetting/crop.svg";
import deleted from "../../assets/overview/accountSetting/delete.svg";
import icon from "../../assets/overview/accountSetting/icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccountSettings = () => {
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

            <TabsList className='font-Syne  flex items-center gap-16 bg-white'>

              <TabsTrigger value="account" className="text-[#071431] text-2xl font-Syne">My Account</TabsTrigger>
              <TabsTrigger value="addresses" className="text-[#071431] text-2xl font-Syne">My Addresses</TabsTrigger>
              <TabsTrigger value="wallet" className="text-[#071431] text-2xl font-Syne">My Wallet</TabsTrigger>

            </TabsList>
            <hr className="mt-4"/>

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
                      <div>
                        <button className="underline cursor-pointer hover:text-black">
                          Change Email
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-1 flex-col mt-8">
                      <div>
                        <p>Password:</p>
                      </div>
                      <div>
                        <p>*****************</p>
                      </div>
                      <div>
                        <button className="underline cursor-pointer hover:text-black">
                          Change Password
                        </button>
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
                          <button className="underline cursor-pointer hover:text-black">
                            Edit URL
                          </button>
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
                            <button className="underline cursor-pointer hover:text-black">
                              Make Profile Private
                            </button>
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

            <TabsContent value="addresses">
              Change your addresses here.
            </TabsContent>

            <TabsContent value="wallet">Change your wallet here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
