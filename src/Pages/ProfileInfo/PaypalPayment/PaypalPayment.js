import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PaypalPayment.css"

const PaypalPayment = () => {
    return (
        <div className='mt-5'>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        </div>
    );
};

export default PaypalPayment;