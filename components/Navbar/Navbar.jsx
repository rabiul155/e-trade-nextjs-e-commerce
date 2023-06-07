"use client"

import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import logo from '../../public/Images/logo.png'
import { useContext, useState } from 'react';
import styles from './Navbar.module.css'
import Link from 'next/link';
import Image from "next/image";
import { dashboardContext } from "@/context/Context";


function Navbar() {

    const { toggle, setToggle } = useContext(dashboardContext);

    const [open, setOpen] = useState(false);

    const menuItems = (
        <>
            <li className="mr-5 flex items-center">
                <Link
                    onClick={() => setOpen(false)}
                    className="hover:bg-[#333333] font-semibold hover:text-white  px-4 py-2 rounded-2xl duration-150"
                    href='/products'
                >
                    Products
                </Link>
            </li>
            <li className="mr-5 flex items-center">
                <Link
                    onClick={() => setOpen(false)}
                    className="hover:bg-[#333333] font-semibold hover:text-white  px-4 py-2 rounded-2xl duration-150"
                    href='/'
                >
                    Cart
                </Link>
            </li>
            <li className="mr-5 flex items-center">
                <Link
                    onClick={() => setOpen(false)}
                    className="hover:bg-[#333333] font-semibold hover:text-white px-4 py-2 rounded-2xl duration-150"
                    href='/'
                >
                    Help
                </Link>
            </li>
            <li className="mr-5 flex items-center">
                <Link
                    onClick={() => setOpen(false)}
                    className="hover:bg-[#333333] font-semibold hover:text-white px-4 py-2 rounded-2xl duration-150"
                    href='/dashboard'
                >
                    Dashboard
                </Link>
            </li>
        </>
    );

    return (
        <div className=" ">
            <div className={`${styles.mainNav}`}>
                <div className="  flex justify-between items-center px-2 lg:px-4 text-gray-800 h-[70px]">
                    <div className="flex items-center">
                        <button
                            onClick={() => setToggle(!toggle)}
                            className="  p-2 rounded-[50%] duration-300 text-white font-bold lg:hidden block"
                        >
                            {toggle ?
                                <RxCross2
                                    className="text-black font-bold "
                                    size={25}
                                />
                                :
                                <HiMenu
                                    className="text-black font-bold "
                                    size={25}
                                />
                            }
                        </button>
                        <Link className="text-[22px] font-semibold mr-0 lg:mr-6" href="/"><Image src={logo}></Image></Link>

                        <ul className="lg:flex hidden items-center text-[16px]">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="flex items-center">

                        <Link href='/login'>
                            <button className="lg:mr-5  text-[16px] font-semibold hover:bg-[#333333] hover:text-white  px-4 py-2 rounded-2xl duration-150">
                                Login
                            </button>
                        </Link>

                        <Link className=" hidden lg:block" href='/signup'>
                            <button className=" bg-white text-black rounded-2xl lg:px-3 px-2 py-1 font-semibold duration-150">
                                Sign Up
                            </button>
                        </Link>


                        <button
                            onClick={() => setOpen(!open)}
                            className="hover:bg-[#333333] p-2 rounded-[50%] duration-150 text-white font-bold lg:hidden block"
                        >
                            {open ? (
                                <RxCross2
                                    className="text-black font-bold lg:hidden block"
                                    size={25}
                                />
                            ) : (
                                <HiMenu
                                    className="text-black font-bold lg:hidden block"
                                    size={25}
                                />
                            )}
                        </button>
                    </div>

                </div>
            </div >
            <div className={`lg:hidden ${styles.phoneNav} ${open ? styles.phoneDisplay : ""}`} >
                <ul className=" pt-2">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;