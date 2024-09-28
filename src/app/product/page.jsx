"use client";

import { useRouter as UseRouter } from "next/navigation";

function page() {
  const router = UseRouter();

  const placeOrder = () => {
    alert("order Confirm");
    router.push("/");
  };
  return (
    <div>
      <h1>This is a product page</h1>
      <li>Buy Iphone</li>
      <button className="" onClick={placeOrder}>
        Confirm Order
      </button>
    </div>
  );
}

export default page;
