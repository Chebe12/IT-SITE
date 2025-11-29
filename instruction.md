# NovaTech Solutions - Local Development Instructions

Follow these steps to run the application locally.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Installation

1.  **Clone or Download** the project files to your local machine.

2.  **Install Dependencies**:
    Open a terminal in the project root directory and run:
    ```bash
    npm install
    ```
    (Or `yarn install` if you prefer Yarn)

## Configuration

This application uses the Google Gemini API for the chatbot feature. You need to set up your API key.

1.  **Get a Gemini API Key**: Visit [Google AI Studio](https://aistudio.google.com/) to obtain an API key.

2.  **Set Environment Variable**:
    The application looks for the API key in `process.env.API_KEY`.
    
    If using a bundler like **Vite** (recommended for this setup):
    Create a `.env` file in the root directory:
    ```env
    VITE_API_KEY=your_actual_api_key_here
    ```
    *Note: If using Vite, you may need to update `components/AIChatbot.tsx` to use `import.meta.env.VITE_API_KEY` instead of `process.env.API_KEY`, or configure your bundler to define `process.env.API_KEY`.*
    
    If using **Create React App** (Webpack):
    Create a `.env` file:
    ```env
    REACT_APP_API_KEY=your_actual_api_key_here
    ```
    *And update code to use `process.env.REACT_APP_API_KEY`.*

    **For this specific code provided**, assuming a standard bundler setup that injects `process.env.API_KEY`:
    Ensure your build tool (like Vite via `define` or Webpack's `DefinePlugin`) replaces `process.env.API_KEY` with your key string.

## Running the App

Start the development server:

```bash
npm start
```
(Or `npm run dev` depending on your `package.json` scripts)

The application should now be running at `http://localhost:3000` (or similar port).

## Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist/` or `build/` folder containing the static files.
