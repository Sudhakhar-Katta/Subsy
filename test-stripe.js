// Import dotenv to load environment variables
import 'dotenv/config';
import Stripe from 'stripe';

// Verify we have the Stripe key
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY environment variable is not set');
  process.exit(1);
}

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function testStripe() {
  try {
    console.log('Testing Stripe connection...');
    
    // Test connection by listing customers
    const customers = await stripe.customers.list({ limit: 3 });
    console.log(`Successfully connected to Stripe! Found ${customers.data.length} customers.`);
    
    // List available payment methods
    console.log('\nAvailable payment methods:');
    const paymentMethods = await stripe.paymentMethods.list({ limit: 3 });
    console.log(paymentMethods.data.map(pm => `${pm.type}: ${pm.id}`));
    
    console.log('\nStripe configuration is working correctly!');
  } catch (error) {
    console.error('Stripe connection test failed:', error);
  }
}

testStripe();