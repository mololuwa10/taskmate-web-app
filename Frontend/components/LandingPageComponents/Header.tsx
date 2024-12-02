/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { fetchUserDetails, useLogout, UserDetails } from "@/lib/auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState(true);

    const logout = useLogout();

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const details = await fetchUserDetails();
                setUserDetails(details);
            } catch (error) {
                console.error("Failed to fetch user details", error);
            } finally {
                setLoading(false);
            }
        };

        getUserDetails();
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.from(".mobile-menu a", {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.1,
            });
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                className="relative bg-white dark:bg-gray-800"
            >
                <div className="container px-6 py-4 mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            className="lg:hidden text-gray-500 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                ></path>
                            </svg>
                        </button>

                        <a href="/">
                            Task Mate
                            {/* <img
                                className="w-auto h-6 sm:h-7"
                                src="https://merakiui.com/images/full-logo.svg"
                                alt=""
                            /> */}
                        </a>
                    </div>

                    <div className="hidden lg:flex space-x-10">
                        <a
                            href="/"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                        >
                            About us
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                        >
                            Contact
                        </a>
                    </div>

                    <div className="flex items-center space-x-6">
                        {loading ? (
                            <span>Loading...</span>
                        ) : userDetails ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        type="button"
                                        className="flex items-center focus:outline-none cursor-pointer"
                                        aria-label="toggle profile dropdown"
                                    >
                                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                            <img
                                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                className="object-cover w-full h-full"
                                                alt="avatar"
                                            />
                                        </div>
                                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                                            {userDetails.userName}
                                        </h3>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[10rem]">
                                    {userDetails && (
                                        <>
                                            <DropdownMenuLabel className="overflow-ellipsis">
                                                {userDetails.firstName}{" "}
                                                {userDetails.lastName}
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer">
                                                Profile
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">
                                                Billing
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                className="cursor-pointer"
                                                onClick={logout}
                                            >
                                                Log Out
                                            </DropdownMenuItem>
                                        </>
                                    )}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <a
                                href="/GetStarted"
                                className="px-6 py-3 mx-3 mt-2 transition-colors border-2 duration-300 transform rounded-3xl lg:mt-0 dark:text-gray-200 text-white bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700"
                            >
                                Get Started
                            </a>
                        )}
                    </div>
                </div>

                {isOpen && (
                    <div className="mobile-menu lg:hidden dark:bg-gray-800">
                        <div className="flex flex-col space-y-4 px-6 py-4">
                            <a
                                href="/"
                                className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                            >
                                About us
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 dark:text-gray-200 hover:text-gray-900"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </motion.nav>
        </>
    );
}
