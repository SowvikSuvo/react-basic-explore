import React, { use } from "react";
import { CartContext } from "../Layouts/RootLayout";

const Cart = () => {
  const { cart, setCart } = use(CartContext);
  return (
    <div>
      {cart.map((plant) => (
        <>
          <div key={plant.id} className="py-2">
            <div className="flex  gap-5 items-center p-2 bg-amber-500 rounded-2xl w-150 ">
              <img
                className="w-[80px] h-[60px] rounded-xl"
                src={plant.image}
                alt=""
              />
              <p className="font-bold text-lg ml-5">{plant.name}</p>
              <p>|</p>
              <p className="font-bold ">Price: {plant.price} $</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;
