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

**IMPORTANT**: 
You **cannot** open `index.html` directly (double-click).
You **cannot** use the "Live Server" extension in VS Code.
You **must** use the Vite development server included in the project.

Start the development server:

```bash
npm run dev
```

The application should automatically open in your browser at `http://localhost:5173`.

## Troubleshooting

- **Error: Failed to resolve module specifier "react/jsx-runtime"**: 
  - This means you are not running the Vite server.
  - Close the tab, go to your terminal, and make sure `npm run dev` is running.
  - Open the URL shown in the terminal (usually http://localhost:5173).

- **Error: process is not defined**: 
  - Ensure you are running the latest version of the code provided, which handles environment variables via Vite.

## Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist/` folder containing the compiled static files.