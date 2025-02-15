"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Head } from "@inertiajs/react";
import RootLayout from "@/Layouts/Layout";
import { DataTableTransactions } from "./DataTableTransactions";

export default function Transactions({ transactions }: any) {
    console.log(transactions);
    return (
        <RootLayout>
            <div className="container mx-auto px-4 py-16">
                <Head title="Transaction" />
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Daftar Tranksaksiku
                </h1>

                <div className="grid md:grid-cols-1 gap-12">
                    <DataTableTransactions transactions={transactions} />
                </div>
            </div>
        </RootLayout>
    );
}
