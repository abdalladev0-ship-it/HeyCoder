# ⚡ HeyCoder AI Sidekick

HeyCoder is a fast, privacy-first, 100% free AI coding assistant built using **HTML, CSS, JavaScript, and Electron**. It integrates a feature-rich web console with a native desktop workstation, communicating directly with a free, local AI engine running on your computer.

🌐 **Live Website:** [heycoder.freedev.app](http://freedev.app)

---

## ✨ Features

- **Double-Sided Ecosystem:** Use it instantly inside your web browser or download the dedicated standalone desktop software.
- **Privacy First & Local:** The desktop app processes all code requests 100% offline directly on your own computer hardware.
- **Sleek AI Interface:** Dark-mode optimized workbench designed specifically for viewing code snippets, variables, and algorithms.
- **100% Free Forever:** No subscriptions, no hidden tokens, and no premium paid cloud tiers.

---

## 🛠️ How It Works (The Local Brain)

HeyCoder utilizes **Ollama** as its local execution model engine. To make either the web bench or the desktop application respond to your code prompts, ensure you have your local brain running:

1. Download and install Ollama from [ollama.com](https://ollama.com).
2. Open your terminal or command prompt and fetch the ultra-fast coding model:
   ```bash
   ollama run qwen2.5-coder:1.5b
   ```
3. Keep Ollama running in your system background. HeyCoder will automatically connect to your system port `http://localhost:11434` to stream code logic.

---

## 💻 Local Desktop App Development

If you want to modify or compile the desktop app (`.exe`) locally from the source files:

### 1. Prerequisites
Ensure you have **Node.js** and **npm** installed on your Windows machine.

### 2. Setup & Installation
Clone or download this project workspace directory, open your terminal inside it, and run:
```bash
npm install
```

### 3. Run the App in Development Mode
To boot up the live interactive desktop window shell interface:
```bash
npm start
```

### 4. Compile into a Standalone Windows Installer (`.exe`)
To package the entire source stack into a single, portable Windows application executable:
```bash
npm run dist
```
Once completed, your installation package will be generated inside the `/dist/` folder.

---

## 📄 License

This project is open-source and available under the [Apache License](LICENSE).
