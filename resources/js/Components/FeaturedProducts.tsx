import { Link, router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import toast from "react-hot-toast";

export default function FeaturedProducts({ products }: any) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product: any) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <Link href={`/products/${product.id}`}>
                                <img
                                    src={
                                        `/storage/` + product.image ||
                                        "/placeholder.svg"
                                    }
                                    alt={product.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                            </Link>
                            <div className="p-4">
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="text-lg font-semibold mb-2 hover:text-primary">
                                        {product.name}
                                    </h3>
                                </Link>
                                <p className="text-gray-600 mb-4">
                                    Rp. {product.price.toFixed(2)}
                                </p>
                                <Button
                                    className="w-full"
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
                    ))}
                </div>
            </div>
        </section>
    );
}
