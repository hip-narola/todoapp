****1. Project Overview****

This repository contains a simple Task Manager application built as part of the technical assessment.
The project demonstrates my ability to design, implement, and containerize a full-stack web application using:

- Backend: ASP.NET Core + GraphQL + Entity Framework Core + SQL Server
- Frontend: React (with Relay GraphQL client)
- Database: SQL Server (can be swapped with SQLite for simplicity)

The application allows users to:
- Create a new task (title, description)
- Update a task’s status (Pending ↔ Completed)
- View all tasks in real time via GraphQL queries

****2. Architecture & Approach****

**Backend** (ToDoApp)
- GraphQL schema with Task type (id, title, description, status).
- Mutations:
  - createTask → add a new task
  - updateTaskStatus → toggle status
- Query:
  - getAllTasks → fetch all tasks
- Persistence handled via Entity Framework Core.

**Frontend** (ToDoReact)
- React app with Relay GraphQL client.
- Components to:
  - Add new tasks
  - List all tasks
  - Update task status
- UI designed for clarity and usability.

****3. AI Tools & Models Used****

- Claude.ai (Anthropic) – for planning, scaffolding GraphQL schema, EF Core setup.
- ChatGPT (OpenAI GPT-5) – for debugging and optimization.
