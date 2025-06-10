# 🧑‍💻 Bogdan Tsybin — Frontend Developer

This repository contains a personal portfolio website developed using a modern frontend stack.  
The project is built with a focus on scalable architecture, multilingual support, and responsive design.

It demonstrates practical frontend development skills, including component organization, global state management, and reusable UI patterns.

---

## 🚀 Technologies Used

- **React + TypeScript** – component-based development with static typing
- **Vite** – modern fast build tool
- **SCSS** – modular and nested styling
- **Redux Toolkit** – centralized state management (language settings, burger menu, etc.)
- **Context API** – language localization and switching
- **Custom Hooks** – reusable logic encapsulated in hooks (`useLocalStorage`, `useWindowWidth`, etc.)
- **Responsive Design** – adaptive layout for all screen sizes
- **Multilingual Support** – Russian and English interface versions

---

## 🎯 Project Objectives

- Apply architectural principles in a real-world React project
- Build a clean and maintainable folder structure
- Manage global state using Redux Toolkit and Context API
- Implement multilingual support without third-party libraries
- Ensure modularity and reusability of components

---

## 📁 Project Structure

```bash
📁 SITE-PORTFOLIO
├── node_modules/
├── public/
│   └── Tsybin_Bogdan_CV.pdf
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── Axios.tsx
│   │   │   ├── Css.tsx
│   │   │   ├── Docker.tsx
│   │   │   ├── EmailIcon.tsx
│   │   │   ├── Git.tsx
│   │   │   ├── GitHub.tsx
│   │   │   ├── Html.tsx
│   │   │   ├── JS.tsx
│   │   │   ├── React.tsx
│   │   │   ├── Rest_api.tsx
│   │   │   ├── Sass.tsx
│   │   │   ├── Tailwind_css.tsx
│   │   │   ├── TelegramIcon.tsx
│   │   │   ├── TS.tsx
│   │   │   ├── Vite.tsx
│   │   │   └── Whatsapp.tsx
│   │   └── images/
│   │       └── Bogdan.jpg
│
│   ├── components/
│   │   ├── about-me-card/
│   │   │   ├── about-me-data.ts
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── burgerMenu/
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── button/
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── footer/
│   │   │   ├── allSvgIcons.ts
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── header/
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── LanguageSwitcher/
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── main-title/
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── paragraph/
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   └── projects-slider/
│   │       ├── index.tsx
│   │       └── style.scss
│
│   ├── context/
│   │   └── LanguageContext.tsx
│
│   ├── hooks/
│   │   ├── useAppSelector.ts
│   │   ├── useLocalStorage.ts
│   │   └── useWindowWidth.ts
│
│   ├── interface-language-data/
│   │   └── data.ts
│
│   ├── store/
│   │   ├── burgerSlice.ts
│   │   ├── index.ts
│   │   └── languageSlice.ts
│
│   ├── App.scss
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## ⚙️ Installation and Launch

# 1. Clone the repository
git clone https://github.com/BogdanTsybin2005/site-portfolio.git

# 2. Install dependencies
npm install

# 3. Run the project in development mode
npm run dev

---

## 📫 Contact

If you have any questions or are interested in collaboration:

- [Telegram](https://t.me/bogdan_sest_1025)
- [Email](https://mail.google.com/mail/?view=cm&fs=1&to=tsybinb@gmail.com)

---

# My Site Portfolio

This Docker image contains a static build of my personal site portfolio.  
The project is built using Node.js and Vite, and served with Nginx via a multi-stage Docker build.

---

## How to Run the Docker Container

To run the image locally using Docker, use the following command:

```bash
docker run -d -p 8000:80 bogdan1025/my-site-portfolio:latest
```
