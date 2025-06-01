
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Address {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

const AddressBook = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      label: "Home",
      name: "John Doe",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true
    },
    {
      id: "2",
      label: "Work",
      name: "John Doe",
      street: "456 Business Ave, Suite 200",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      country: "United States",
      isDefault: false
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState({
    label: "",
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States"
  });


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveAddress = () => {
    if (editingAddress) {
      setAddresses(prev => prev.map(addr =>
        addr.id === editingAddress.id
          ? { ...addr, ...formData }
          : addr
      ));
      toast.success("Address Updated", {
        description: "Your address has been updated successfully",
      });
    } else {
      const newAddress: Address = {
        id: Date.now().toString(),
        ...formData,
        isDefault: addresses.length === 0
      };
      setAddresses(prev => [...prev, newAddress]);
      toast.success("Address Added", {

        description: "Your new address has been added successfully",
      });
    }

    setIsDialogOpen(false);
    setEditingAddress(null);
    setFormData({
      label: "",
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States"
    });
  };

  const handleEditAddress = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      label: address.label,
      name: address.name,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      country: address.country
    });
    setIsDialogOpen(true);
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    toast.warning("Address Deleted", {

      description: "The address has been removed from your address book",
    });
  };

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    toast.success("Default Address Updated", {

      description: "Your default address has been changed",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Address Book
          </CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Address
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {editingAddress ? "Edit Address" : "Add New Address"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="label">Address Label</Label>
                  <Input
                    id="label"
                    placeholder="e.g., Home, Work, etc."
                    value={formData.label}
                    onChange={(e) => handleInputChange("label", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input
                    id="street"
                    placeholder="123 Main Street, Apt 4B"
                    value={formData.street}
                    onChange={(e) => handleInputChange("street", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      placeholder="NY"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="10001"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select value={formData.country} onValueChange={(value: string) => handleInputChange("country", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="United States">United States</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={handleSaveAddress} className="w-full">
                  {editingAddress ? "Update Address" : "Save Address"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{address.label}</h4>
                      {address.isDefault && (
                        <Badge variant="default" className="text-xs">Default</Badge>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{address.name}</p>
                      <p>{address.street}</p>
                      <p>{address.city}, {address.state} {address.zipCode}</p>
                      <p>{address.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditAddress(address)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteAddress(address.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {!address.isDefault && (
                  <div className="mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSetDefault(address.id)}
                    >
                      Set as Default
                    </Button>
                  </div>
                )}
              </div>
            ))}

            {addresses.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No addresses saved yet</p>
                <p className="text-sm">Add your first address to get started</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { AddressBook };
