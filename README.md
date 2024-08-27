# Resilient Email Service

# Resilient Email Sending Service
# Overview
This project implements a resilient email sending service in TypeScript, featuring retry logic with exponential backoff, provider fallback, idempotency, rate limiting, and status tracking. The service is designed to handle failures gracefully and ensure reliable email delivery.

# Features
Retry Mechanism: The service retries email sending using exponential backoff, increasing the delay between retries to reduce the load on the system.
Provider Fallback: If one email provider fails, the service automatically switches to another provider.
Idempotency: Ensures that the same email is not sent multiple times, even if the send operation is retried.
Rate Limiting: Controls the rate at which emails are sent to avoid exceeding provider limits.
Status Tracking: Tracks the status of each email send attempt.
Bonus Features: The implementation can be extended to include a circuit breaker pattern, logging, and a basic queue system.


# Project Structure

resilient-email-service/
├── src/
│   ├── emailService.ts       // Implementation of the EmailService class
│   └── emailService.test.ts  // Unit tests for the EmailService class
├── jest.config.js            // Jest configuration file
├── tsconfig.json             // TypeScript configuration file
├── package.json              // Project metadata and dependencies
└── node_modules/             // Installed dependencies

# Getting Started
# Prerequisites
1. Node.js (version 14 or later)
2. npm (version 6 or later)

# Installation
Clone the repository:
git clone https://github.com/yashpatel000007/resilient-email.git
cd resilient-email


# Install dependencies:
npm install
Compile TypeScript:

npm run build

# Configuration
TypeScript Configuration: The tsconfig.json file is set up to compile TypeScript files from src/ to dist/. The output target is ES6, and module resolution is set to node.

Jest Configuration: The jest.config.js file is configured to use ts-jest for running tests with TypeScript.

# Running Tests
To run the unit tests, use the following command:
1. npm run test
This will execute the tests defined in src/emailService.test.ts and validate the functionality of the EmailService class.

# Usage
1. EmailService Class:
The EmailService class can be instantiated with an array of email providers. It handles sending emails with retry logic and provider fallback.
Example:
import { EmailService, MockProvider1, MockProvider2 } from './emailService';
const provider1 = new MockProvider1();
const provider2 = new MockProvider2();
const emailService = new EmailService([provider1, provider2]);
emailService.sendEmail('test@example.com', 'Subject', 'Body')
  .then(() => console.log('Email sent successfully'))
  .catch(err => console.error('Failed to send email', err));

2. Mock Providers:
MockProvider1 and MockProvider2 are simple mock implementations of an email provider interface. These can be replaced with actual providers in a real-world scenario.

# Development
Adding Features
1. Circuit Breaker Pattern: Implementing this pattern can help prevent overloading a failing provider by halting requests temporarily when a failure threshold is reached.

2. Logging: Adding logging can help track the flow of email sending and identify issues in production.

3. Basic Queue System: Implementing a queue system can help manage email sending in a more controlled manner, especially when dealing with large volumes of emails.

# Extending Tests
Unit tests should be extended to cover additional edge cases, such as handling rate limits and testing with different provider failure scenarios.

# Conclusion
This project demonstrates a robust approach to building a resilient email sending service using TypeScript. The architecture is designed to be extendable, with clear separation of concerns and a focus on reliability.