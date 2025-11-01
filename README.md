# Inspira — Quote Generator Webapp

A simple, lightweight **React** webapp that generates quotes on demand from the **ZenQuotes API**. Designed for quick inspiration — with features to copy, recite, favorite, and manage saved quotes using `localStorage`.

---

## 🚀 Features

-   **Generate a new quote** — instantly get a fresh quote from the ZenQuotes API.
-   **Copy to clipboard** — copy the currently displayed quote with one click.
-   **Recite (Text-to-Speech)** — have the quote read aloud using the browser's speech synthesis API.
-   **Add to Favorites** — save quotes locally (uses `localStorage`).
-   **Clear All Favorites** — a single button to remove all saved favorites from localStorage.

---

## 🧩 Tech Stack

-   **React** — component-based UI framework.
-   **ZenQuotes API** — provides random quotes for inspiration.
-   **LocalStorage** — for persisting favorite quotes.
-   **SpeechSynthesis API** — for reciting quotes aloud.

---

## 🌐 Demo

> **Live Demo:** [https://inspira-lakshya.vercel.app/](https://inspira-lakshya.vercel.app/)

---

## 📦 Repository

GitHub: [Inspira — Daily Inspiration](https://github.com/lakshyaaa2410/Inspira---Daily-Inspiration)

Clone the repository:

```bash
git clone https://github.com/lakshyaaa2410/Inspira---Daily-Inspiration.git
cd Inspira---Daily-Inspiration
```

---

## ⚙️ Installation & Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory and add the following line:

```bash
VITE_QUOTES_API_URL="https://zenquotes.io/api/random"
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:8000` (or as shown in your terminal).

---

## 🧠 How It Works

-   The app fetches a random quote from **ZenQuotes API** using the endpoint specified in the `.env` file.
-   Each quote can be:

    -   **Copied** using `navigator.clipboard`.
    -   **Recited** using `window.speechSynthesis`.
    -   **Favorited** and saved in `localStorage`.

-   Favorites persist between sessions until manually cleared.

---

## 📈 Future Enhancements

-   Add category filters (Motivational, Love, Life, etc.).
-   Enable social media sharing.
-   Sync favorites via a backend (Firebase, Supabase, etc.).

---

## 🤝 Contributing

Contributions are welcome! Open a PR or issue with suggestions.

---

## 📜 License

MIT © Lakshya Choudhary

---

_Built with ❤️ using React — Inspira brings inspiration to your fingertips._
