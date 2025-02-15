import ProductDetail from "@/Components/ProductDetail";
import RootLayout from "@/Layouts/Layout";

export default function ProductPage({ product }: any) {
    // const product = await getProductById();

    return (
        <RootLayout>
            <ProductDetail product={product} />
        </RootLayout>
    );
}
