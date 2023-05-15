import React from "react";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#808080",
        height: "100vh",
        "@media (max-width: 768px)": {
          backgroundColor: "white",
        },
      }}
    >
      <p className="flex items-center justify-center text-[32px] mb-5 text-white">
        Mock Checkout Page
      </p>
      <CheckoutPage />
    </div>
  );
}

export default App;
