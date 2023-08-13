# Techlane_AI_Assessemnts
# AI Product Dashboard Backend

This project implements the server-side components for an AI product's dashboard. It uses Node.js with Express for the backend and Python for AI-related functionality.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Data Storage](#data-storage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project serves as the backend for an AI product's dashboard. It provides API endpoints for retrieving mock AI model metrics and simulated AI predictions, which are used for data visualization in the frontend.

The backend is built using Node.js with the Express framework. It also integrates with a Python script for generating AI predictions.

## Features

- `/api/metrics`: Retrieve mock AI model metrics data (accuracy, precision, recall, etc.) in JSON format.
- `/api/predictions`: Retrieve simulated AI predictions and actual results in JSON format for data visualization.
- Error handling and validation for API requests.
- Data storage using JSON files.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) are required to run the server.
- Python should be installed to execute the AI prediction script.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required Node.js dependencies:

   ```sh
   npm install

  # The server will run on http://localhost:3000 by default.
  ### API Endpoints
GET /api/metrics: Retrieve mock AI model metrics data.
GET /api/predictions: Retrieve simulated AI predictions and actual results.

### Data Storage
Mock AI metrics and simulated prediction data are stored in JSON files within the data directory.

### Error Handling
The server includes error handling for invalid API requests. Errors are logged and appropriate error responses are sent to clients.

### Contributing
Contributions are welcome! If you have any enhancements or fixes, please open an issue or a pull request.
