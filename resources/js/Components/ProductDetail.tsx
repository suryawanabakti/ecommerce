import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";
import toast from "react-hot-toast";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function ProductDetail({ product }: { product: Product }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img
                        src={`/storage/` + product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl font-semibold mb-4">
                        ${product.price.toFixed(2)}
                    </p>
                    <p
                        className="text-gray-600 mb-6"
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    ></p>
                    <Button
                        onClick={() => {
                            router.post(
                                "/carts",
                                {
                                    product_id: product.id,
                                },
                                {
                                    preserveScroll: true,
                                    onSuccess: () =>
                                        toast.success(
                                            "Berhasil tambah ke keranjang"
                                        ),
                                }
                            );
                        }}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
