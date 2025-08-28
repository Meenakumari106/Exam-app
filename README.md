# Exam App - Student Module

This is a full-stack exam-taking application (student-side only) built with React.js, Node.js, Express.js, and MongoDB.

## Features
- User Registration & Login (JWT authentication)
- Dashboard with exam details
- Exam Instructions page
- Exam page with timer and question navigation
- Submit exam & view results

## Technology Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB (Atlas or local)
- API testing: Postman / curl

## Setup Instructions

### Backend

1. Navigate to backend folder:
cd backend

2.Install dependencies
npm install

3.create .env file
PORT=5001
JWT_SECRET=<your secrect key>
MONGO_URI=<your_mongodb_connection_string>

4.Seed questions (optional):
rnpm run seed

5.start backend server
npm start

##Frontend
1.Navigate to frontend folder:

cd frontend


2.Install dependencies:

npm install


3.Create a .env file:

VITE_API_URL=http://localhost:5001/api


4.Start the frontend:

npm run dev


API Endpoints (Postman / curl)
Auth

POST /api/auth/register – Register user

POST /api/auth/login – Login user

Exam

GET /api/exam/questions – Get all exam questions (requires JWT)

POST /api/exam/submit – Submit answers and get score (requires JWT)


--------API TESTING INSTRUCTIONS-----------

You can create a **Postman collection** with the endpoints above, 
export it as JSON, and include it in your repo (`Postman_Collection.json`).  
Or provide **curl commands**:

```bash
# Register
curl -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{"username":"test","password":"1234"}'

# Login
curl -X POST http://localhost:5001/api/auth/login \
-H "Content-Type: application/json" \
-d '{"username":"test","password":"1234"}'

# Get Questions
curl -X GET http://localhost:5001/api/exam/questions \
-H "Authorization: Bearer <token>"

# Submit Exam
curl -X POST http://localhost:5001/api/exam/submit \
-H "Authorization: Bearer <token>" \
-H "Content-Type: application/json" \
-d '{"answers":{"q1":"option1","q2":"option2"}}'
