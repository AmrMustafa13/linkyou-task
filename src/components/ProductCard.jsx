import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

const ProductCard = ({ product }) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div
      className="flex flex-col rounded overflow-hidden"
      style={{
        border: "1px solid rgba(39, 61, 93, 0.50)",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="bg-gray-300 flex-1">
        <img
          src={product.img}
          alt={product.title}
          className="w-full object-cover h-40"
          loading="lazy"
        />
      </div>
      <div className="flex-1 py-1 px-4 text-secondary flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[17px] font-semibold">{product.price}$</p>
          <div
            className="flex items-center justify-center p-1 w-9 h-9 rounded-full cursor-pointer"
            style={{
              boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
            onClick={() => setIsFav((prev) => !prev)}
          >
            {isFav ? (
              <FaHeart className="text-xl" />
            ) : (
              <FaRegHeart className="text-xl" />
            )}
          </div>
        </div>
        <h3 className="font-[500] text-[#030F2E]">{product.title}</h3>
        <p className="text-secondary-text">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-xl" />
            <p className="text-[13px] text-secondary-text">
              {product.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdAccessTime className="text-xl" />
            <p className="text-[13px] text-secondary-text">{product.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
