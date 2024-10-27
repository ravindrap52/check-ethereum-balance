# automation-builder

A web application to get the ethereum balance based on ethereum address.

## Libraries Used

### shadcn/ui

I used shadcn/ui components for this project, as they come with Tailwind utility classes support and can be easily customized.

### Tanstack Query

Utilized Tanstack Query for maintaining server-side state, allowing for cached API results. This ensures that repeated requests with the same data fetch results from the cache.

### React Hook Form

I utilized React Hook Form for form validation because it is lightweight and minimizes re-renders.

### Zod

I used Zod for validations.

## Project Setup

### Cloning the Repository

To clone the repository, use the following command:

```bash
git https://github.com/ravindrap52/check-ethereum-balance.git
```

### Installation

To install the dependencies, navigate into the project directory and run:

```bash
cd check-ethereum-balance
npm install
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

#### This will open the browser and navigate to http://localhost:5173.

### Running the Tests

To run the tests, execute:

```bash
npm run test
```

### Ethereum Address for testing

```bash
0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
```

### Building for Production

To build the project for production, use:

```bash
npm run build
```
