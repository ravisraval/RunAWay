# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Workouts
all require logged in user
- `GET /api/workouts` - index of current user's workouts
- `POST /api/workouts` - create workout
- `GET /api/workouts/:id`- specific workout show page
- `DELETE /api/workouts/:id` - delete workout

### Routes
all require logged in user

- `GET /api/routes` - index of current user's routes
- `POST /api/routes` - create route
- `GET /api/routes/:id`- specific route show page
- `DELETE /api/routes/:id` - delete route
- `PATCH /api/routes/:id` - update existing route
