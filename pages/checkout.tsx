import {loadStripe} from '@stripe/stripe-js'
//const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) 
const stripePromise = loadStripe(

    'pk_test_51IkSkJGC3BvbM9Dfr7cjV3H4REqFRp6gqXK0jCDdbDnDcJtCW6lv2vo6AfZkoDDrbw8ROuPGcYu36Euy0kcHs3Zn00D10MvSP0'
    );
    
export default function Checkout(){
    const handleClick = async (event) => {
        // Call your backend to create the Checkout Session
        const {sessionId} = await fetch('/api/checkout/session', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({quantity: 1})
        }).then(res => res.json())
    
        // When the customer clicks on the button, redirect them to Checout
        const stripe = await stripePromise;

        const {error} = await stripe.redirectToCheckout({
            sessionId,
        });
    }
    return (
        <div>
            <h1>Checkout</h1>
            <button role="link" onClick={handleClick}>
                Checkout
            </button>
        </div>)
}