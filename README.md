# Backend (Express + TypeScript)

This small backend provides basic API endpoints for the frontend to consume during development.

Quick start

1. Change to the `server` folder:

```
cd server
```

2. Install dependencies:

```
npm install
```

3. Run in development (auto-restarts):

```
npm run dev
```

The server will run on `http://localhost:4000` by default. Example endpoints:

- `GET /health` — health check
- `GET /api/products` — list products
- `GET /api/products/:id` — single product
- `POST /api/products` — create product (json body)
- `POST /api/auth/login` — mock login

To build for production:

```
npm run build
npm start

Git hooks

This repo includes a lightweight local git hook that prevents accidentally committing
real `.env` files. To enable the hook for your local clone run from the project root:

```
npm run install:githooks
```

The hook will block commits that stage `server/.env` or other `.env` files. The
check script `scripts/check-no-env.sh` is intended for CI and will fail if any
commit in history contains tracked env files.
```
