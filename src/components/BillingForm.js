import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { TextField, Grid, useMediaQuery } from "@mui/material";

const BillingForm = ({ onBillingSubmit }) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCvcChange = (event) => {
    setCvc(event.target.value);
  };

  const handleInputFocus = (event) => {
    setFocus(event.target.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBillingSubmit(name, cardNumber, expiry, cvc);
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`mt-10 p-10 ${isMobile ? "w-full" : ""}`}  style={{
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#F8F8F8",
      borderRadius: "8px",
    }}>
      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={isMobile ? 12 : 6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={cardNumber}
              containerProps={{
                style: { width: isMobile ? "100%" : "500px", height: "400px" },
              }}
            />
          </div>
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name on Card"
              value={name}
              onChange={handleNameChange}
              onFocus={handleInputFocus}
              fullWidth
            />
            <TextField
              id="cardNumber"
              name="number"
              label="Card Number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              onFocus={handleInputFocus}
              fullWidth
            />
            <TextField
              id="expiry"
              name="expiry"
              label="Expiration Date"
              value={expiry}
              onChange={handleExpiryChange}
              onFocus={handleInputFocus}
              fullWidth
            />
            <TextField
              id="cvc"
              name="cvc"
              label="CVC"
              value={cvc}
              onChange={handleCvcChange}
              onFocus={handleInputFocus}
              fullWidth
            />
            <button
              type="submit"
              style={{ background: "lightblue" }}
              className="hover:bg-blue-700 font-bold py-1 px-4 rounded"
            >
              Submit Payment
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default BillingForm;
