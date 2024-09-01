# Car Rental Services Backend

## Overview
The Car Rental Services Backend is a robust API-driven platform designed to manage all aspects of a car rental business. It facilitates seamless operations, including vehicle management, customer bookings, and user authentication. This system supports admin controls and client interactions, ensuring a smooth and secure experience for both service providers and customers.

## Features
- **User Authentication & Authorization**: Secure login and registration using JWT.
- **Vehicle Management**: CRUD operations for vehicles, including availability tracking.
- **Booking System**: Efficient booking process with conflict management.
- **Admin Dashboard**: Comprehensive admin controls for managing cars, users, and bookings.
- **Payment Integration**: Integration with payment gateways for booking transactions.

## Technologies
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Environment**: dotenv for environment variables
- **Logging**: Winston for error and request logging

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance running

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/gunn333/CRS_Backend.git
   cd CRS_Backend
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Server**:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:3000`.

## API Documentation
### Authentication
- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: User login

### Vehicles
- **GET** `/api/cars`: Get all available cars
- **POST** `/api/cars`: Add a new car (Admin only)
- **PUT** `/api/cars/:id`: Update car details (Admin only)
- **DELETE** `/api/cars/:id`: Delete a car (Admin only)

### Bookings
- **GET** `/api/bookings`: Get all bookings (Admin only)
- **POST** `/api/bookings`: Create a new booking
- **GET** `/api/bookings/user/:userId`: Get bookings by user


## Contribution Guidelines
1. Fork the repository.
2. Create a new branch 
3. Commit your changes.
4. Open a pull request.

## License
This project is licensed under the MIT License.
