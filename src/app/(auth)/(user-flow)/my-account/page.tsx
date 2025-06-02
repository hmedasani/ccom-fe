"use client"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Settings, MapPin, ShoppingBag, Shield } from "lucide-react";
import { PersonalInfo } from "@/components/account/PersonalInfo";
import { SecuritySettings } from "@/components/account/SecuritySettings";
import { AddressBook } from "@/components/account/AddressBook";
import { OrderHistory } from "@/components/account/OrderHistory";
import { Card, CardContent } from "@/components/ui/card";

const MyAccountPage = () => {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div className="h-full flex items-center justify-center p-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Profile Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-8">
                            <CardContent className="p-6">
                                <div className="text-center">
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="" alt="Profile" />
                                        <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">
                                            JD
                                        </AvatarFallback>
                                    </Avatar>
                                    <h3 className="font-semibold text-lg">John Doe</h3>
                                    <p className="text-gray-600 text-sm">john.doe@example.com</p>
                                    <div className="flex justify-center mt-3">
                                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                                            <Shield className="w-3 h-3 mr-1" />
                                            Verified
                                        </Badge>
                                    </div>
                                </div>

                                <nav className="mt-8 space-y-2">
                                    <button
                                        onClick={() => setActiveTab("personal")}
                                        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === "personal"
                                            ? "bg-blue-100 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        <User className="w-4 h-4 mr-3" />
                                        Personal Info
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("security")}
                                        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === "security"
                                            ? "bg-blue-100 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Settings className="w-4 h-4 mr-3" />
                                        Security
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("addresses")}
                                        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === "addresses"
                                            ? "bg-blue-100 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        <MapPin className="w-4 h-4 mr-3" />
                                        Address Book
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("orders")}
                                        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === "orders"
                                            ? "bg-blue-100 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        <ShoppingBag className="w-4 h-4 mr-3" />
                                        Order History
                                    </button>
                                </nav>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="space-y-6">
                            {activeTab === "personal" && <PersonalInfo />}
                            {activeTab === "security" && <SecuritySettings />}
                            {activeTab === "addresses" && <AddressBook />}
                            {activeTab === "orders" && <OrderHistory />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccountPage;
