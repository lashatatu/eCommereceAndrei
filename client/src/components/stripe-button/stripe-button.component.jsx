import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hssh6A6Tws3n3o2mvE2m6q3yHB20Mm1fBB8ggVkHMvF4USSLGm00t1OCsdpakAKlCpyX6Jt7BlAxxKT90xQUQOy00sDfczDg5';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('succesful payment');
            })
            .catch(error => {
                console.log('Payment Error: ',error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Store'
            billingAddress
            shippingAddress
            image={'https://sendeyo.com/up/d/f3eb2117da'}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;