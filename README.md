# Simple-Feedback-Management-System
Feedback Application
Overview
This project is a full-stack feedback application with a Nest.js backend and a React frontend, both using TypeScript. Users can submit feedback and view all feedback entries. The backend stores feedback in-memory, while the frontend fetches and displays data using a web worker for better performance.

Features
Backend
Nest.js: Provides a structured and scalable server-side application.
API Endpoints:
GET /feedback: Retrieve all feedback entries.
POST /feedback: Submit new feedback.
In-Memory Storage: Uses an array to store feedback entries.
Input Validation: Ensures feedback submissions contain necessary fields.
Frontend
React: Modern and responsive user interface.
Components:
FeedbackForm: Form to submit name and feedback.
FeedbackList: List to display all submitted feedback.
API Communication: Uses Axios for API requests to the backend.
Web Worker: Fetches feedback data in the background for better performance.
TypeScript: Ensures type safety and improved developer experience.
Getting Started
Prerequisites
Node.js (v14 or later)
npm or yarn
Backend Setup
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/feedback-app.git
cd feedback-app
Navigate to the backend directory:
bash
Copy code
cd feedback-app
Install dependencies:
bash
Copy code
npm install
Run the server:
bash
Copy code
npm run start
The backend server runs at http://localhost:3000.

Frontend Setup
Navigate to the frontend directory:
bash
Copy code
cd feedback-client
Install dependencies:
bash
Copy code
npm install
Run the development server:
bash
Copy code
npm start
The frontend app runs at http://localhost:3001.

Contributing
Contributions are welcome! Submit a pull request or open an issue for any bugs or feature requests.

License
Licensed under the MIT License. See the LICENSE file for details.
