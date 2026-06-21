import { useState } from "react";
import type { Order } from "../types";
import { useSearchParams } from "react-router-dom";

const MyOrders = () => {

  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const [searchParams, setSearchParams] = useSearchParams("all")
  const tabs = []

  return (
    <div>
      
    </div>
  )
}

export default MyOrders
