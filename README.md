# Personal Portfolio

An open-source personal portfolio website by Borhan Boulandier that displays professional experience, tools, and contact details in a minimalistic design. The aim of this project is to serve as an exercise to adopt a modular, reusable approach.

## Overview

The project is developed using:

- **React**
- **TypeScript**
- **Vite**

## Project Structure

The repository organisation is as follows:

- **src/**  
  Contains the source code for the portfolio.

  - **components/**  
    Holds reusable React components such as `Header`, `MainContent`, and the sub-sections in the portfolio.
  - **data/**  
    Contains content and configuration data (e.g. `content.ts`), which abstracts content from the presentation.
  - **styles/**  
    Contains CSS files for tokens, layout, and component styling.

- **public/** (if applicable)  
  For public assets such as the favicon and other static files.

- **configuration Files:**  
  Includes files such as `package.json`, `tsconfig.app.json`, `vite.config.ts`

## Getting Started

### Prerequisites

- Node.js (version 22.0.0 or above)
- [pnpm](https://pnpm.io/) (version 10.0.0 or above) is recommended to manage dependencies, though npm or yarn may also be used.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BsBou/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Available Scripts

- **Development server:**  
  Launch the development server with hot module replacement:

  ```bash
  pnpm dev
  ```

- **Build:**  
  Build for production:

  ```bash
  pnpm build
  ```

- **Lint:**  
  Check for linting errors using ESLint:

  ```bash
  pnpm lint
  ```

- **Preview:**  
  Preview the production build:

  ```bash
  pnpm preview
  ```

- **Test and Coverage:**  
  Run tests with Vitest and generate a coverage report:

  ```bash
  pnpm test
  pnpm coverage
  ```

### Customizing

If you would like to use this portfolio and make it your own, you can start by customizing the base styling in `/src/styles/tokens.css` and the content in `src/data/content.ts`. From there, feel free to make any changes.

### Deployment

The simplest way to deploy this project is using [Vercel](https://vercel.com/) (That's where the live version of this project is hosted)

## Contributing

Contributions are warmly welcomed :). Whether you wish to fix a bug, improve the documentation, or suggest a new feature, please open an issue or submit a pull request. Make sure to follow the existing coding style and testing guidelines.

## Licence

This project is open source and available under the [MIT Licence](LICENSE). Feel free to use, modify, and distribute as permitted under the licence.

Feel free to explore, collaborate, and share your feedback. Thank you!
