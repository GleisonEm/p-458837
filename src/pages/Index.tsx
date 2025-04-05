import React, { useState } from "react";
import StatusBar from "@/components/ecommerce/StatusBar";
import Header from "@/components/ecommerce/Header";
import TabBar from "@/components/ecommerce/TabBar";
import SearchBar from "@/components/ecommerce/SearchBar";
import ProductGrid from "@/components/ecommerce/ProductGrid";
import { products } from "@/data/products";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  // State for active tab
  const [activeTabId, setActiveTabId] = useState("todos");

  // Tabs data
  const tabs = [
    { id: "todos", label: "Todos", active: activeTabId === "todos" },
    { id: "carteira", label: "Carteira", active: activeTabId === "carteira" },
    { id: "chaveiro", label: "Chaveiro", active: activeTabId === "chaveiro" },
    { id: "bolsas", label: "Bolsas", active: activeTabId === "bolsas" },
    { id: "bones", label: "Bonés", active: activeTabId === "bones" },
  ];

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
  };

  // Handle search
  const handleSearch = (query: string) => {
    toast({
      title: "Search",
      description: `Searching for: ${query}`,
    });
  };

  // Handle add to cart
  const handleAddToCart = (productId: string) => {
    toast({
      title: "Added to cart",
      description: `Product ID: ${productId} added to cart`,
    });
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#F6F6F6]">
      <header className="flex flex-col w-full bg-[#060606]">
        <StatusBar />
        <Header />
        <nav aria-label="Product categories">
          <TabBar tabs={tabs} onTabChange={handleTabChange} />
        </nav>
      </header>

      <section className="flex flex-col gap-6 p-6">
        <SearchBar onSearch={handleSearch} />

        <ProductGrid products={products} onAddToCart={handleAddToCart} />
      </section>
    </main>
  );
};

export default Index;
