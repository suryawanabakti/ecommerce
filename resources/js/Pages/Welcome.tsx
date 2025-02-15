import Hero from "@/Components/Hero";
import FeaturedProducts from "@/Components/FeaturedProducts";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Home({ products }: any) {
    return (
        <Layout>
            <Head title="Home" />
            <main>
                <Hero />
                <FeaturedProducts products={products} />
            </main>
        </Layout>
    );
}
