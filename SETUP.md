# blank
### Payload Project Setup

Welcome to this Payload project! This guide will walk you through the steps to get up and running quickly and efficiently. We’re using `pnpm` as our package manager for this project, and we highly recommend it for its superior performance and space efficiency. The Payload team has also switched to `pnpm` as their default, so you're in great hands!

## Why pnpm?

`pnpm` is fast, efficient, and more disk-space friendly compared to other package managers like `npm` or `yarn`. It stores packages in a global content-addressable store, which means that if you install the same package across multiple projects, it won’t duplicate it each time—it just creates a hard link. This makes your installations much faster and conserves disk space.

With `pnpm`, you get:

- **Fast Installations**: Thanks to efficient caching mechanisms.
- **No Duplicates**: Packages are stored once, linked across projects.
- **Consistency**: Ensures that the node_modules structure is always the same.
- **Community & Support**: As Payload CMS now adopts pnpm as its default, you're aligned with the latest best practices.

## Prerequisites

Before you begin, ensure you have `pnpm` installed globally on your local machine. If not, you can install it by running the following command:

- `npm install -g pnpm`

To verify if `pnpm` is installed, run:

- `pnpm -v` This should display the installed version if everything is set up correctly.

## Setting Up the Project
Now that you have pnpm installed, follow these steps to get the project up and running:

**1. Clone the Repository**

    Start by cloning this repository to your local machine:
    `git clone YOUR_PROJECT_REPO_URL`

**2. Navigate to the Project Directory**
    Change to the newly cloned project directory:
    `cd YOUR_PROJECT_REPO`

**3. Copy the Environment Variables**
    Copy the example environment file to `.env`:
    `cp .env.example .env`

**4. Install Dependencies**
    With `pnpm` as your package manager, install the necessary dependencies by running:
    `pnpm install`

    This will install all the packages required to run the application while taking advantage of pnpm’s efficiency.

**5. Start the Development Server**
    Now that everything is installed, you can start the development server by running:
    `pnpm dev`
    Once the server is running, open your browser and navigate to:
    `http://localhost:3000/admin`

Here, you’ll be able to create your first admin user and start using the Payload CMS.