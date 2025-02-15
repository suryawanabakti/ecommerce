import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center">
                About EcoShop
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-4">
                        At EcoShop, we're on a mission to make sustainable
                        living accessible and enjoyable for everyone. We believe
                        that small changes in our daily lives can lead to a big
                        impact on our planet.
                    </p>
                    <p className="text-gray-600">
                        Our carefully curated selection of eco-friendly products
                        is designed to help you reduce waste, conserve
                        resources, and live a more sustainable lifestyle without
                        compromising on quality or style.
                    </p>
                </div>
                <div>
                    <img
                        src="/placeholder.svg"
                        alt="Eco-friendly products"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-8 text-center">
                Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Sustainability</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            We prioritize products that are made from
                            sustainable materials, have minimal environmental
                            impact, and promote a circular economy.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Quality</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            We believe that sustainable products should also be
                            durable and high-quality, ensuring they last longer
                            and reduce the need for frequent replacements.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Transparency</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            We're committed to providing clear information about
                            our products' origins, materials, and environmental
                            impact to help you make informed choices.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                    EcoShop was founded in 2020 by a group of environmentally
                    conscious entrepreneurs who saw the need for a one-stop shop
                    for sustainable products. What started as a small online
                    store has grown into a community of like-minded individuals
                    all working towards a more sustainable future.
                </p>
                <p className="text-gray-600">
                    Today, we continue to expand our product range and reach,
                    always staying true to our core mission of making
                    sustainable living accessible to all. We're proud to be part
                    of the solution and grateful for every customer who joins us
                    in this journey towards a greener planet.
                </p>
            </div>
        </div>
    );
}
