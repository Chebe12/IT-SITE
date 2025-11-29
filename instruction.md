# NovaTech Solutions - Local Development Instructions

Follow these steps to run the application locally.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (Node Package Manager)

## Installation

1.  **Clone or Download** the project files to your local machine.
    Ensure you have `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html` and the `src` files (or root files as structured).

2.  **Install Dependencies**:
    Open a terminal in the project root directory and run:
    ```bash
    npm install
    ```

## Configuration

This application uses the Google Gemini API for the chatbot feature.

1.  **Get a Gemini API Key**: Visit [Google AI Studio](https://aistudio.google.com/) to obtain an API key.

2.  **Set Environment Variable**:
    Create a `.env` file in the root directory:
    ```env
    API_KEY=your_actual_api_key_here
    ```
    *Note: The vite.config.ts is configured to read this key and provide it to the app as `process.env.API_KEY`.*

## Running the App

**IMPORTANT**: Do not open `index.html` directly in your browser. You must start the local development server to resolve module imports.

Start the development server:

```bash
npm run dev
# OR
npm start
```

The application should now be running at `http://localhost:5173`. Open this URL in your browser.

## Troubleshooting

- **Error: Failed to resolve module specifier "react/jsx-runtime"**: This means you are opening the HTML file directly instead of using `npm run dev`.
- **Error: process is not defined**: Ensure you are running the latest version of the code provided, which handles environment variables via Vite.

## Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist/` folder containing the compiled static files.