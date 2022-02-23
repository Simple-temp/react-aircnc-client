import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import "./BankPayment.css"

const BankPayment = () => {

    const [succesmassege, serSuccesmassege] = useState(null)
    const [errormassege, setErrormassege] = useState(null)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.log(error.message)
            setErrormassege(error)
            serSuccesmassege(null)
        }
        if (paymentMethod) {
            serSuccesmassege(paymentMethod)
            setErrormassege(null)
        }


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement className="cardelement" />
                {
                    errormassege && <p>{errormassege.message}</p>
                }
                {
                    succesmassege && <p>payment done!</p>
                }
                <button type="submit" disabled={!stripe || !elements} className="search-btn mt-4">
                    continue to pay
                </button>
            </form>
        </div>
    );
};

export default BankPayment;