
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingBag, Search, Download, Eye } from "lucide-react";

interface Order {
  id: string;
  date: string;
  status: "delivered" | "shipped" | "processing" | "cancelled";
  total: number;
  items: number;
  trackingNumber?: string;
}

const OrderHistory = () => {
  const [orders] = useState<Order[]>([
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 89.99,
      items: 3,
      trackingNumber: "1Z999AA1234567890"
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "shipped",
      total: 149.99,
      items: 2,
      trackingNumber: "1Z999AA1234567891"
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-05",
      status: "processing",
      total: 59.99,
      items: 1
    },
    {
      id: "ORD-2024-004",
      date: "2023-12-28",
      status: "delivered",
      total: 199.99,
      items: 4,
      trackingNumber: "1Z999AA1234567892"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "shipped":
        return "bg-blue-100 text-blue-700";
      case "processing":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Order History
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium">{order.id}</h4>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ordered on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">{order.items} item{order.items > 1 ? 's' : ''}</p>
                  </div>
                </div>

                {order.trackingNumber && (
                  <div className="mb-3 p-2 bg-gray-50 rounded text-sm">
                    <span className="text-gray-600">Tracking Number: </span>
                    <span className="font-mono">{order.trackingNumber}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoice
                  </Button>
                  {order.status === "shipped" && (
                    <Button variant="outline" size="sm">
                      Track Package
                    </Button>
                  )}
                  {order.status === "delivered" && (
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  )}
                </div>
              </div>
            ))}

            {filteredOrders.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No orders found</p>
                <p className="text-sm">
                  {searchTerm || statusFilter !== "all" 
                    ? "Try adjusting your search or filter criteria" 
                    : "You haven't placed any orders yet"
                  }
                </p>
              </div>
            )}
          </div>

          {/* Summary */}
          {orders.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
                  <p className="text-sm text-gray-600">Total Orders</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">Total Spent</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {orders.filter(order => order.status === "delivered").length}
                  </p>
                  <p className="text-sm text-gray-600">Delivered Orders</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export { OrderHistory };
