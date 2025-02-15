"use client";

import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const user = usePage().props.auth.user;

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary">
                    RaihanShop
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-primary">
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="text-gray-600 hover:text-primary"
                    >
                        Products
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-600 hover:text-primary"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-600 hover:text-primary"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            aria-label="User menu"
                        >
                            <User className="h-6 w-6" />
                        </Button>

                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                {user ? (
                                    <>
                                        <Link
                                            href="/transactions"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Daftar Transaksiku
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    {user && user.carts.length > 0 && (
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsCartOpen(!isCartOpen)}
                                aria-label="Shopping cart"
                            >
                                <ShoppingCart className="h-6 w-6" />
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {user.carts.length}
                                </span>
                            </Button>
                            {isCartOpen && (
                                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-10">
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">
                                            Your Cart
                                        </h3>
                                        <ul className="space-y-2">
                                            {user.carts.map((data: any) => {
                                                return (
                                                    <li className="flex justify-between items-center">
                                                        <span>
                                                            {data.product.name}
                                                        </span>
                                                        <span>
                                                            Rp.{" "}
                                                            {data.product.price.toFixed(
                                                                2
                                                            )}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <div className="mt-4">
                                            <Button asChild className="w-full">
                                                <Link href="/checkout">
                                                    Checkout
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
