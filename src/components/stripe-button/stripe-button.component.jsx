import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KqvWTGK867lOivy7NTPaoIfZykmOul9BWvwfVaf6jcDYqxff9UiGVcNlOOmrrDVyEFZP7kmlzUeGWHl6IyYskVW00q6P9btVu";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHiqcBLdAWiubnh3EupIktMzd1xF9Tr7_sKS6DB-iRD_RFdkmrSxM8-gIA32pad79uP0&usqp=CAU"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
