# 🧑‍💻 Portora – Portfolio Builder Frontend

Portora is a modern portfolio builder that empowers users to showcase their projects and skills, track profile views, and engage through newsletters. This is the **frontend** built with React and Tailwind CSS, fully integrated with a powerful backend API.

---

## 🚀 Features

- 🔐 **User Authentication** — Register & log in securely via JWT
- 👤 **Profile Management** — Edit name, bio, photo, skills, etc.
- 💾 **Project Uploads** — Create and edit project entries with images (Cloudinary-powered)
- 📊 **Profile Analytics** — Track profile views
- 🔍 **Project Filtering** — View projects by categories: Frontend, Backend, All
- 🔎 **Search** — Find projects or users by name/keyword
- 📬 **Newsletter** — Subscribe to receive updates
- 📘 **Live API Docs** — Fully integrated with Swagger from the backend

---

## 🛠 Tech Stack

- ⚛️ [React]
- 💨 [Tailwind CSS]
- 🌐 [Axios] — for API requests
- 🔐 [JWT Auth]
- 💅 [shadcn/ui] — for sleek, accessible components
- 📁 [Cloudinary] — for image uploads
- 🧭 [React Router] — for navigation
- 🔎 [React Hook Form] — for forms & validation

---

## 📦 Installation

1. **Clone the repo:**

```bash
git clone https:[https://github.com/4ssh1/portora.git]
cd portora
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

```bash
VITE_API_BASE_URL=http://base_url/api
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

4. **Run the development server:**

```bash
npm run dev
```

##  Folder Structure
src/
│
├── components/       → Reusable UI components (Button, Card, etc.)
├── features/         → Auth, Profile, Projects, Newsletter
├── pages/            → Page components (Home, Login, Dashbord)
├── routes/           → React Router route setup
├── services/         → API functions (axios wrappers)
├── utils/            → Helpers (token, validation, etc.)
└── App.tsx           → Main app entry

## 🔗 API Integration
This frontend is powered by a custom-built backend (Node.js + Express). Features like auth, uploads, and view tracking rely on the backend.

📘 API Docs available at:
will be provided when security is added to the API

Make sure the backend is running and accessible at the URL specified in .env.


## 🤝 Contributing
Pull requests are welcome! Please fork the repo and create a PR from a feature branch.

## 📄 License
MIT
