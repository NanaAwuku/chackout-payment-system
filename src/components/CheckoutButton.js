import React from "react";
import Button from "@mui/material/Button";

const CheckoutButton = ({ onCheckout }) => {
  return (
    <div className="font-bold ">
      <Button variant="" onClick={onCheckout} className="w-full py-5" style={{background:"lightblue", fontWeight:'bold'}} >
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutButton;
