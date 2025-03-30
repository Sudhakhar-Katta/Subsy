# Subsy - Subscription Management Platform

Subsy is a comprehensive subscription management platform that empowers users to track, analyze, and optimize their recurring expenses through intelligent CSV parsing and premium features.

![Subsy Screenshot](./attached_assets/image_1742759620745.png)

## Features

### Core Features
- **CSV-based Subscription Tracking**: Upload your bank statements to automatically detect recurring subscriptions
- **Subscription Management Dashboard**: View, sort, and manage all your subscriptions in one place
- **Potential Savings Calculation**: Identify unused subscriptions and visualize potential monthly savings
- **Subscription Usage Tracking**: Mark subscriptions as "still using" or "not using" to track value

### Premium Features ($5/month)
- **Unlimited Subscription Tracking**: Track all your subscriptions without limits
- **Auto-Cancellation Assistance**: Get help canceling unwanted subscriptions with pre-filled emails
- **Advanced Financial Insights**: Access detailed analytics and reports about spending patterns

## Tech Stack

### Frontend
- **React** with TypeScript for UI components
- **TailwindCSS** for styling
- **shadcn/ui** for UI components
- **React Query** for data fetching and state management
- **Wouter** for routing

### Backend
- **Express.js** for the server
- **PostgreSQL** for database storage
- **Drizzle ORM** for database operations
- **Passport.js** for authentication
- **Stripe** for payment processing

### Data Processing
- Custom CSV parser for bank statement analysis
- Subscription detection algorithm to identify recurring payments

## Getting Started

### Prerequisites
- Node.js v16+
- PostgreSQL database
- Stripe account (for premium features)

### Environment Variables
Create a `.env` file with the following variables:
```
DATABASE_URL=postgres://user:password@localhost:5432/subsy
STRIPE_SECRET_KEY=your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/subsy.git
cd subsy
```

2. Install dependencies
```bash
npm install
```

3. Set up the database
```bash
npm run db:push
```

4. Start the development server
```bash
npm run dev
```

5. Visit `http://localhost:5000` in your browser

## Usage Guide

### Registration and Login
1. Create an account with username, email (optional), and password
2. Log in with your credentials
3. You'll be redirected to the dashboard

### Connecting Your Bank Statements
1. Click "Upload Bank Statement" on the dashboard
2. Select your CSV file from your bank
3. Subsy will automatically detect recurring payments
4. Review and confirm the detected subscriptions

### Managing Subscriptions
1. View all detected subscriptions on your dashboard
2. Mark subscriptions as "still using" or "not using"
3. Sort subscriptions by price, name, or date
4. See your total monthly spending and potential savings

### Canceling Subscriptions
1. Click "Cancel" on subscriptions you no longer want
2. For premium users, get pre-filled cancellation emails
3. For free users, get cancellation instructions

### Premium Upgrade
1. Click "Upgrade to Premium" on the dashboard
2. Complete the payment process with Stripe
3. Enjoy unlimited tracking and advanced features

## Project Structure

```
/
├── client/               # Frontend code
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── App.tsx       # Main app component
├── server/               # Backend code
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database interface
│   └── vite.ts           # Vite server setup
├── shared/               # Shared code
│   └── schema.ts         # Database schema
└── migrations/           # Database migrations
```

## API Reference

### Authentication Endpoints
- `POST /api/register` - Register a new user
- `POST /api/login` - Log in a user
- `POST /api/logout` - Log out current user
- `GET /api/current-user` - Get current user data

### Subscription Endpoints
- `GET /api/subscriptions/:userId` - Get all subscriptions for a user
- `POST /api/subscriptions` - Create a new subscription
- `PATCH /api/subscriptions/:id` - Update a subscription
- `DELETE /api/subscriptions/:id` - Delete a subscription

### Transaction Endpoints
- `GET /api/transactions/:userId` - Get all transactions for a user
- `POST /api/transactions` - Create new transactions

### Payment Endpoints
- `POST /api/create-payment-intent` - Create a payment intent for premium upgrade

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - satyakatta11@gmail.com

Project Link: https://github.com/Sudhakhar-Katta/Subsy)](https://github.com/Sudhakhar-Katta/Subsy)

## Acknowledgements

- [Stripe](https://stripe.com/) for payment processing
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) for database operations
