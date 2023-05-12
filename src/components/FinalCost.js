import React from "react";

const FinalCost = ({ selectedShow, quantity, fees }) => {
  const calculateSubtotal = () => {
    if (selectedShow) {
      return selectedShow.price * quantity;
    }
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const total = subtotal + fees.serviceFee + fees.processingFee;
    return total;
  };

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-GH", { style: "currency", currency: "GHS" });
  };
  

  return (
    <div className="">
      <p className="text-2xl mb-3" style={{color:"lightblue"  }}>Total Price: <span style={{ float: "right", color:"lightblue"  }}>{formatAmount(calculateTotal())}</span></p>
      <p style={{color: "#696969", fontWeight:"500"}}>Selected Show: <span style={{ float: "right" }}>{selectedShow ? selectedShow.name : "N/A"} </span> </p>
      <p style={{color: "#696969", fontWeight:"500"}}>Resale Ticket: <span style={{ float: "right" }}>GHS₵{selectedShow ? selectedShow.price : "N/A"} * {quantity} </span> </p>
      <hr/>
      <p>Subtotal: <span style={{ float: "right" }}>{formatAmount(calculateSubtotal())}</span></p>
      
      
    </div>
  );
};

export default FinalCost;
