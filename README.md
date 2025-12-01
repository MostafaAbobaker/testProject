# Test Project (Angular 19)

- A standalone Angular application with PrimeNG (Aura theme),
- Bootstrap,
- SCSS architecture,
- `OnPush` change detection,
- role-based UI/route permissions via `ngx-permissions`.

## Features
- Standalone components and lazy-loaded routes
- PrimeNG UI with Aura preset
- Bootstrap for layout and utilities
- SCSS architecture (abstracts/base/components/pages)
- `OnPush` change detection with observable-driven templates
- Role-based permissions (`ADMIN`, `USER`) for UI and routes

## Prerequisites
- Node.js 18+ (recommended)
- npm 9+

## Installation
```bash
npm install
```

## Scripts
- `npm start` – ng s -o
- `npm run build` – production build

## Architecture
- `src/app/app.config.ts` – bootstrap providers (router, HTTP, animations, PrimeNG, permissions)
- `src/app/app.routes.ts` – application routes and guards
- `src/app/core` – layout and auth shells
- `src/app/features` – feature components (dashboard, users)
- `src/app/shared` – shared components/services (navbar, sidebar, loading)
- `src/assets/scss` – SCSS architecture (abstracts/base/components/pages)

Directory highlights:

## Permissions
You can test the permissions by logging in with the following credentials:
for Example:
    - `admin@example.com` / `password123`
    - `user@example.com` / `password123`

- `ADMIN` – Full access to all features
- `USER` – Limited access to view-only features

# TestProject

This project was generated using [Angular CLI](https://github.com/MostafaAbobaker/testProject) version 19.2.14.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
