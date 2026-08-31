import { useEffect, useState } from "react";
import { ProductApi } from "../../Service/ProductApi";

export const ProductCard = () => {
  const [data, setData] = useState([]);

  function DataGet() {
    const product = ProductApi();
    setData(product);
  }

  useEffect(() => {
    DataGet();
  }, []);

  return (
   <div className="grid grid-cols-1 w-full mt-7 gap-8 px-10 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
  {data.map((Products, index) => {
    return (
      <div
        key={index}
        className="h-140 bg-blue-950 rounded-2xl text-white overflow-hidden flex flex-col align-middle"
      >
        {/* Product Image */}
        <img
          src={Products.image}
          alt={Products.name}
          className="h-70 w-full object-cover object-top"
        />

        {/* Product Information */}
        <div className="flex flex-col flex-1 p-4 ">

          {/* Product Name */}
          <div className="h-14 flex items-center justify-center text-center">
            <h2 className="text-lg font-bold line-clamp-2">
              {Products.name}
            </h2>
          </div>

          {/* Price & Discount */}
          <div className="flex justify-between px-4 mt-2">
            <p>₹{Products.price}</p>
            <p>{Products.discount}% OFF</p>
          </div>

          {/* Category */}
          <div className="flex justify-between px-4 mt-2">
            <p>Category:</p>
            <p>{Products.category}</p>
          </div>

          {/* Stock */}
          <div className="flex justify-between px-4 mt-2">
            <p>Stock:</p>
            <p>{Products.stock}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-auto pt-4">
            <button
              onClick={() => console.log("Add to Cart:", Products)}
              className="bg-white text-blue-950 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
            >
              Add to Cart
            </button>

            <button
              onClick={() => console.log("Buy Now:", Products)}
              className="bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>
    );
  })}
</div>
  );
};