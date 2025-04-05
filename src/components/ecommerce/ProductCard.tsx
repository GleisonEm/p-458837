import React from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };

  // Format price to Brazilian Real
  const formatPrice = (price: number) => {
    return `R$${price.toFixed(2).replace(".", ",")}`;
  };

  return (
    <article className="flex flex-col bg-white rounded-lg">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-[104px] w-full object-cover"
      />
      <div className="flex flex-col gap-3 border p-3 border-[#F7F7F7]">
        <div className="flex flex-col gap-1">
          <h3 className="text-[#3D3D3D] text-base leading-5">
            {product.title}
          </h3>
          <div className="flex items-center gap-1">
            <span className="text-[#125367] text-sm font-bold leading-[18px]">
              {formatPrice(product.price)}
            </span>
            <span className="text-[#B0B0B0] text-xs leading-4 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          </div>
        </div>
        <button
          className="w-full bg-[#060606] text-white text-sm font-bold leading-6 rounded px-2 py-1"
          onClick={handleAddToCart}
        >
          Adicionar Sacola
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
