// import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

export default function Hero() {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to RaihanShop
                    </h1>
                    <p className="text-xl mb-6">
                        Discover our eco-friendly products that make a
                        difference.
                    </p>
                    <Button size="lg" onClick={() => router.visit("/products")}>
                        Shop Now
                    </Button>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="https://polbangtan-gowa.ac.id/storage/2022/04/gerbang.jpg"
                        alt="Eco-friendly products"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}
