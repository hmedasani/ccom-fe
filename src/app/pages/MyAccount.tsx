
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Settings, MapPin, ShoppingBag, LogOut, Shield, Bell } from "lucide-react";
import { PersonalInfo } from "@/components/account/PersonalInfo";
import { SecuritySettings } from "@/components/account/SecuritySettings";
import { AddressBook } from "@/components/account/AddressBook";
import { OrderHistory } from "@/components/account/OrderHistory";
import { useToast } from "@/hooks/use-toast";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been safely logged out of your account",
    });
    // Redirect to home
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mr-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">My Account</h1>
            </div>
            <Button variant="outline" onClick={handleLogout} className="text-red-600 hover:text-red-700">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

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
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeTab === "personal" 
                        ? "bg-blue-100 text-blue-700" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <User className="w-4 h-4 mr-3" />
                    Personal Info
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeTab === "security" 
                        ? "bg-blue-100 text-blue-700" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Security
                  </button>
                  <button
                    onClick={() => setActiveTab("addresses")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeTab === "addresses" 
                        ? "bg-blue-100 text-blue-700" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <MapPin className="w-4 h-4 mr-3" />
                    Address Book
                  </button>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeTab === "orders" 
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

export default MyAccount;
