import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ShowSelection from "../components/ShowSelection";
import TicketQuantity from "../components/TicketQuantity";
import BillingForm from "../components/BillingForm";
import FinalCost from "../components/FinalCost";
import CheckoutButton from "../components/CheckoutButton";

function CheckoutPage() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [fees] = useState({
    serviceFee: 5.00,
    processingFee: 4.00,
  });

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleSetQuantity = (quantity) => {
    setQuantity(quantity);
  };

  const handleBillingInputChange = (name, value) => {
    setBillingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    
  };

  const calculateSubtotal = () => {
    if (selectedShow) {
      return selectedShow.price * quantity;
    }
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + fees.serviceFee + fees.processingFee;
  };

  return (
    <div
      maxWidth="md"
      className="sm:mx-32 flex justify-center items-center"
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={7}>
          <Grid
            container
            spacing={""}
            className="rounded-lg shadow p-20"
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#F8F8F8",
              borderRadius: "8px",
            }}
          >
            <Grid item xs={12} md={7}>
              <ShowSelection
                selectedShow={selectedShow}
                onSelectShow={handleSelectShow}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TicketQuantity
                selectedShow={selectedShow}
                onSetQuantity={handleSetQuantity}
              />
            </Grid>
          </Grid>

          <BillingForm onBillingInputChange={handleBillingInputChange} />
        </Grid>
        <Grid item xs={12} md={5}>
          <div
            className="rounded-lg h-full shadow px-10 py-5"
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#F8F8F8",
              borderRadius: "8px",
            }}
          >
            <FinalCost
              selectedShow={selectedShow}
              quantity={quantity}
              fees={fees}
              subtotal={calculateSubtotal()}
              total={calculateTotal()}
            />

            <div className="mt-2">
              <h4 className="text-lg font-bold mb-2">Notes from the seller</h4>
              <p style={{color: "#696969", fontWeight:"500"}}>Please note that photography is not allowed during the show</p>
            </div>
            <div className="mt-2 ">
              <h4 className="text-lg font-bold mb-2">Fees</h4>
              <p style={{ color: "#696969", fontWeight: "500" }}>
                Service Fee:{" "}
                <span style={{ float: "right" }}> ₵{fees.serviceFee}</span>
              </p>
              <p style={{ color: "#696969", fontWeight: "500" }}>
                Order Processing Fee:{" "}
                <span style={{ float: "right" }}> ₵{fees.processingFee}</span>
              </p>
            </div>
            <div className="mt-2 ">
              <h4 className="text-lg font-bold mb-1">Delivery Information</h4>
              <p style={{ color: "#696969", fontWeight: "500" }}>
                Enjoy Free Delivery: We are pleased to offer complimentary
                delivery service for all orders. Sit back and relax as we take
                care of shipping your items directly to your doorstep, free of
                charge. Take advantage of this convenient service and experience
                hassle-free delivery with us
              </p>
            </div>
            <div className="mt-2 ">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 cursor-pointer text-[16px]" />
                
                  I have read and agree to the <span style={{ color: "lightblue", marginLeft:"6px", textDecoration: "underline", cursor:"pointer" }}> terms and conditions.
                </span>
              </label>
            </div>
            <CheckoutButton onCheckout={handleCheckout} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CheckoutPage;
