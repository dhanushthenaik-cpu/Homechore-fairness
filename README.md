# HomeChore Fairness – MERN Stack
A shared household chore planner with assignments, completion history, recurring schedule labels and workload fairness analytics.

## Requirements
- Node.js 18+
- MongoDB local or MongoDB Atlas

## Run on Windows / VS Code
1. Open this folder in VS Code.
2. Run `npm install`
3. Run `npm run install:all`
4. Copy `server/.env.example` to `server/.env`.
5. Set `MONGODB_URI` in `server/.env`.
6. Start MongoDB.
7. Run `npm run dev`.
8. Open http://localhost:5173. API: http://localhost:5000/api/health

## REST API
GET /api/health
GET, POST /api/housemates
DELETE /api/housemates/:id
GET, POST /api/chores
PUT, DELETE /api/chores/:id
PATCH /api/chores/:id/complete
GET /api/analytics/fairness?days=30

## Notes
This educational version uses one shared database and does not include authentication or multi-household isolation. Recurrence is stored as a schedule label; future tasks are not auto-generated. Fairness is estimated from recorded completions and configurable chore weights.

## Publish on Render
1. Create a MongoDB Atlas database and allow Render's outbound connections (for a classroom demo, Atlas Network Access can temporarily allow `0.0.0.0/0`; use a strong database password).
2. Push this repository to GitHub.
3. In Render choose **New → Blueprint**, connect the repository, and let Render read `render.yaml`.
4. Add the `MONGODB_URI` environment variable when prompted. The build creates the React frontend and Express serves it from the same web service.
5. Deploy. Check `https://YOUR-SERVICE.onrender.com/api/health`.
