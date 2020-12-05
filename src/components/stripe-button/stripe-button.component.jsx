import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hssh6A6Tws3n3o2mvE2m6q3yHB20Mm1fBB8ggVkHMvF4USSLGm00t1OCsdpakAKlCpyX6Jt7BlAxxKT90xQUQOy00sDfczDg5';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Store'
            billingAdress
            shippingAddress
            image={'https://sendeyo.com/up/d/f3eb2117da'}
            description={`Your total is$${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;