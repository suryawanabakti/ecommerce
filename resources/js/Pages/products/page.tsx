import ProductList from "@/Components/ProductList";
import RootLayout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function ProductsPage({ products }: any) {
    return (
        <RootLayout>
            <Head title="Products" />
            <ProductList products={products} />
        </RootLayout>
    );
}
