# Turbo Boilerplate Repository

Welcome to the Turbo Boilerplate Repository. This repository serves as a boilerplate for turbo usage, containing a set of packages and applications to get you up and running quickly with your project.

## Packages

The repository contains the following packages:

- `@packages/eslint-config-common`: This package includes a set of shared ESLint configuration rules.
- `@packages/prettier-common`: This package consists of common Prettier formatting rules.
- `@packages/test-common`: It includes common test configuration and helpers for your applications.
- `@packages/tsconfig`: This package includes shared TypeScript configuration settings.

## Applications

- `@apps/express-api`: This is an Express.js application. It also includes a shared folder, which can be imported and used in other parts of your project.

## Key Features

- **Monorepo setup:** The repository utilizes the monorepo setup, offering an organized structure for your applications and shared code. It helps to centralize the configuration and ensure consistency across multiple packages.

- **Task management with Turbo:** Turbo is used for task execution, which aids in efficient task management across multiple packages within the project.

- **TypeScript:** TypeScript is used as the main language for the project.

- **Express and Nest.js apps:** This boilerplate comes with Express and Nest.js applications pre-configured, offering a choice between two of the most popular Node.js frameworks.

- **Pre-configured ESLint and Prettier:** ESLint and Prettier are already set up, ensuring consistent code style and automatic formatting across the project.

- **Jest for Testing:** The boilerplate includes a testing setup using Jest, ready to write and run your tests.

- **Environment Variable Management:** dotenv is used for managing environment variables, ensuring easy configuration across different environments (development, staging, production).

## Running the Applications

The `package.json` file at the root of the repository contains several useful scripts:

- `"start:express-api"`: Runs all applications in development mode.
- `"lint"`: Lints all the applications and packages with ESLint.
- `"build"`: Builds all the applications and packages.
- `"build:watch"`: Watches all the applications and packages and rebuilds them if there are changes.
- `"test"`: Runs tests for all applications and packages.
- `"update"`: Updates all the dependencies of the repository.
