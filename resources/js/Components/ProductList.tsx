"use client";

import { useState } from "react";

import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function ProductList({ products }: any) {
    // Mock product data - in a real app, this would come from an API or database

    const categories = [
        "All",
        ...new Set(products.map((product: any) => product.category)),
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(
                  (product: any) => product.category === selectedCategory
              );

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Our Products</h2>
            <div className="flex flex-wrap gap-4 mb-8">
                {categories.map((category: any) => (
                    <Button
                        key={category}
                        variant={
                            selectedCategory === category
                                ? "default"
                                : "outline"
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product: any) => (
                    <Card key={product.id}>
                        <CardHeader>
                            <img
                                src={
                                    `/storage/` + product.image ||
                                    "/placeholder.svg"
                                }
                                alt={product.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>{product.name}</CardTitle>
                            <p className="text-gray-600">
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                                {product.category}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/products/${product.id}`}>
                                    View Details
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
