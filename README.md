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
