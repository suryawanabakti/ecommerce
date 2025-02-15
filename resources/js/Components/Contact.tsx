"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Head } from "@inertiajs/react";
import RootLayout from "@/Layouts/Layout";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <RootLayout>
            <div className="container mx-auto px-4 py-16">
                <Head title="Contact" />
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Contact Us
                </h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Get in Touch
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <Button type="submit">Send Message</Button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Our Location
                        </h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15895.28968385253!2d119.4859100499218!3d-5.1322831171725305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd6afd5eb049%3A0x29adcc881e289c72!2sUNITAMA!5e0!3m2!1sen!2sid!4v1739589249574!5m2!1sen!2sid"
                            width="600"
                            height="250"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="mt-4">
                            <p className="text-gray-600">123 Eco Street</p>
                            <p className="text-gray-600">New York, NY 10001</p>
                            <p className="text-gray-600">
                                Phone: (123) 456-7890
                            </p>
                            <p className="text-gray-600">
                                Email: info@ecoshop.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
}
