import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function OrderConfirmation() {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">
                Thank You for Your Order!
            </h1>
            <p className="mb-8">
                Your order has been received and is being processed.
            </p>
            <Button asChild>
                <Link href="/">Return to Home</Link>
            </Button>
        </div>
    );
}
