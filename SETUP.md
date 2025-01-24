# Payload Project Setup

Welcome to this Payload project! This guide will walk you through the steps to get up and running quickly and efficiently. We’re using `pnpm` as our package manager for this project, and we highly recommend it for its superior performance and space efficiency. The Payload team has also switched to `pnpm` as their default, so you're in great hands!

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

# Basic Coolify and Bitbucket setup
- Navigate to keys and tokens on coolify to create an access key.
- Copy the public key (will be needed in step 4).
- Navigate to repository settings of the cms project, and click on Access Keys
- Paste the public key copied from coolify and save.
- Go back to coolify, click on projects and choose your project directory (We currently use PayloadCMS).
- Click on `New` to create new resource (project)
- Click on `Private Repo (with deploy key)`, and select `localhost` on the next screen display.
- Then select created `public key` in step 1.
- Next, you copy and paste the repo url in the field (repository url), and Branch input value would be `main`. Then continue the process.

## Configuration Screen
- Edit the default `name` and `domain name` to your project name
- Click on `Environment variable` to paste your local environment variables for the project.
- Click on the `Healthchecks` and edit the paths field to `/admin`, and save.
- Finally, click on the `Deploy` button