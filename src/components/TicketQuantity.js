import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const TicketQuantity = ({ selectedShow, onSetQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const minValue = 1;

  const handleDecrease = () => {
    if (quantity > minValue) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onSetQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onSetQuantity(newQuantity);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent:"center", padding:"7px" }}>
      <IconButton
        aria-label="Decrease Quantity"
        disabled={quantity <= minValue}
        onClick={handleDecrease}
        style={{ backgroundColor: "#ffe082" }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" style={{ margin: "0 10px" }}>
        {quantity}
      </Typography>
      <IconButton
        aria-label="Increase Quantity"
        onClick={handleIncrease}
        style={{ backgroundColor: "lightblue" }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default TicketQuantity;
