"use client";

import type React from "react";

import { useState } from "react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import RootLayout from "@/Layouts/Layout";
import { router, usePage } from "@inertiajs/react";
import axios from "axios";

// Mock cart items - in a real app, this would come from your cart state

export default function Checkout() {
    const user = usePage().props.auth.user;

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        address: user.alamat,
        nohp: user.nohp,
        carts: user.carts,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const total = user.carts.reduce(
        (sum: any, item: any) => sum + item.product.price * item.qty,
        0
    );

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/transactions", {
                carts: user.carts,
            });

            const snapToken = response.data.token;

            // Panggil Midtrans Snap
            window.snap.pay(snapToken, {
                onSuccess: function (result: any) {
                    console.log("Payment success:", result);
                    router.visit("/transactions");
                },
                onPending: function (result: any) {
                    console.log("Waiting for payment:", result);
                },
                onError: function (result: any) {
                    console.error("Payment failed:", result);
                },
                onClose: function () {
                    location.reload();
                    console.log("Payment popup closed");
                },
            });
        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    return (
        <RootLayout>
            <div className="container mx-auto px-4 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Checkout</CardTitle>
                        <CardDescription>Complete your order</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="nohp">No.HP</Label>
                                    <Input
                                        id="nohp"
                                        name="nohp"
                                        value={formData.nohp}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                        <h3 className="text-lg font-semibold mb-2">
                            Order Summary
                        </h3>
                        {user.carts.map((item: any) => (
                            <div
                                key={item.id}
                                className="flex justify-between w-full mb-2"
                            >
                                <span>
                                    {item.product.name} (x{item.qty})
                                </span>
                                <span>
                                    Rp.
                                    {(item.product.price * item.qty).toFixed(2)}
                                </span>
                            </div>
                        ))}
                        <div className="flex justify-between w-full border-t pt-2 mt-2">
                            <span className="font-semibold">Total:</span>
                            <span className="font-semibold">
                                Rp. {total.toFixed(2)}
                            </span>
                        </div>
                        <Button
                            className="w-full mt-4"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Place Order
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </RootLayout>
    );
}
