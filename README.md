# AI Driven Claim Letter Assistant API

Welcome to the **AI Driven Claim Letter Assistant API**! This project is a backend service built with Express.js that leverages artificial intelligence to assist in generating and managing claim letters.

## Features

- **AI-Powered Claim Letter Generation**: Automatically generate claim letters using advanced AI models.
- **User Management**: Securely manage users and their claim letter history.
- **RESTful API**: Built with Express.js, providing a clean and intuitive RESTful interface.
- **Scalable**: Designed to handle a growing number of users and requests.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (for database storage)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://AI-DrivenClaimLetterAssistant@dev.azure.com/AI-DrivenClaimLetterAssistant/AI-Driven%20Claim%20Letter%20Assistant/_git/AI-Driven%20Claim%20Letter%20Assistant ai-driven-claim-assistant-api
   ```

2. **Install dependencies**:
   ```bash
   cd ai-driven-claim-assistant-api
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/claimletterdb
   AI_API_KEY=your_ai_api_key_here
   JWT_SECRET=your_jwt_secret_here
   ```

4. **Run the server**:
   ```bash
   npm start
   ```

   The API should now be running on `http://localhost:3000`.

## API Endpoints

### Authentication (TODO)
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### Claim Letters
- **VERB /api/endpoint**: Endpoint description.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Clone the repository.
2. Create a new branch from develop (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'feat: add some feature'`).
4. Make sure to follow best practices for commits [Writting good commit messages a practical guide](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.
