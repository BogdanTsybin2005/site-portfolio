# 🧑‍💻 Bogdan Tsybin — Frontend-разработчик

Данный проект представляет собой персональный сайт-портфолио, реализованный с использованием современного frontend-стека.  
Проект разработан с акцентом на грамотную архитектуру, поддержку мультиязычности и адаптивную вёрстку.

Он демонстрирует мои практические навыки в разработке клиентской части веб-приложений, включая организацию компонентов, управление состоянием и построение масштабируемой структуры проекта.

---

## 🚀 Технологии, применённые в проекте

- **React + TypeScript** — компонентный подход с типизацией
- **Vite** — современный инструмент сборки с высокой скоростью
- **SCSS** — модульные стили с использованием вложенностей
- **Redux Toolkit** — централизованное управление состоянием (язык интерфейса, бургер-меню)
- **Context API** — локализация и управление языком
- **Custom hooks** — кастомные React-хуки (`useLocalStorage`, `useWindowWidth` и др.)
- **Адаптивная вёрстка** — интерфейс, корректно отображающийся на всех типах устройств
- **Мультиязычность** — поддержка русского и английского языков

---

## 🎯 Цели проекта

- Реализовать на практике архитектурные принципы в React-приложении
- Организовать чистую и поддерживаемую структуру проекта
- Применить глобальное состояние с использованием Redux Toolkit и Context API
- Обеспечить мультиязычную поддержку без сторонних библиотек
- Настроить модульность и повторное использование компонентов

---

## 📁 Структура проекта

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

---

## ⚙️ Установка и запуск

# 1. Клонируйте репозиторий
git clone https://github.com/BogdanTsybin2005/site-portfolio.git

# 2. Установите зависимости
npm install

# 3. Запустите проект в режиме разработки
npm run dev

---

## 📫 Контакты

Если у вас возникли вопросы по проекту или интерес к сотрудничеству:

- **Telegram**: [Мой телеграм](https://t.me/bogdan_sest_1025)
- **Email**: [Моя почта](https://mail.google.com/mail/?view=cm&fs=1&to=tsybinb@gmail.com)
