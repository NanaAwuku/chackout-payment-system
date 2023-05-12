import React, { useEffect, useState } from "react";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`app ${isMobileView ? "mobile" : "desktop"}`}>
      <p className="flex items-center justify-center text-[32px] mb-5 text-white">
        Mock Checkout Page
      </p>
      <CheckoutPage />
    </div>
  );
}

export default App;
