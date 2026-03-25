# Resume Generator

A cross-platform desktop application for generating resumes and cover letters, built with Tauri, React, and TypeScript. Fill in your details via a sidebar form, preview the result in real time, and export to PDF — in either English or Swedish.

## Features

- **Resume & cover letter templates** — Switch between document types from the sidebar
- **English & Swedish support** — Toggle the UI and template language at any time
- **Live preview** — See your document update as you type
- **PDF export** — Save your finished document as a PDF using a native file dialog
- **Persistent personal defaults** — Your personal details are saved automatically and reloaded on next launch

## Tech Stack

- [Tauri](https://tauri.app/) — Native desktop wrapper (Rust)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) — Frontend UI
- [Vite](https://vitejs.dev/) — Build tool

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri prerequisites](https://tauri.app/start/prerequisites/) for your OS

### Install dependencies
```bash
npm install
```

### Run in development mode
```bash
npm run tauri dev
```

### Build for production
```bash
npm run tauri build
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
