import About from "@/Components/About";
import RootLayout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function AboutPage() {
    return (
        <RootLayout>
            <Head title="About" />
            <About />
        </RootLayout>
    );
}
