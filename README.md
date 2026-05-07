# 🚀 Bhupendra Chopra — Developer Portfolio

> Personal portfolio website built with **React + Vite**, showcasing projects, skills, experience, and contact information.

🌐 **Live:** [bhupendrachopra.dev](#) &nbsp;|&nbsp; 📧 bhupendrachopra001@gmail.com &nbsp;|&nbsp; 📍 Jaipur, Rajasthan, India

---

## 📸 Preview

![Portfolio Preview](./src/assets/hero.png)

---

## ✨ Features

- ⚡ Lightning-fast with **Vite** + **React 18**
- 🎨 Smooth animations via **Framer Motion**
- 🌙 Dark-themed glassmorphism UI
- 📱 Fully responsive across all devices
- 📬 Contact form with **EmailJS** + **WhatsApp** integration
- 🔁 Auto-rotating testimonials carousel
- 🗂️ Filterable projects by category
- 🧠 Animated skill bars with scroll reveal
- 🧭 Sticky navbar with active section tracking

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | EmailJS |
| UI Components | Radix UI |

---

## 📁 Project Structure

```
src/
├── assets/              # Project images & static files
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Projects, Skills, Experience, Contact...
│   └── ui/              # Reusable UI components (shadcn/ui)
├── hooks/               # useScrollReveal, useTheme, use-mobile
├── lib/                 # Utilities, auth context
└── pages/
    └── Portfolio.jsx    # Main page
```

---

## 🗂️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, CTA buttons |
| **About** | Summary, stats, career timeline |
| **Projects** | 6 real-world projects with images & live links |
| **Skills** | Animated skill bars — Frontend, Backend, Tools |
| **Experience** | 4 professional roles with achievements |
| **Services** | Web Dev, APIs, UI/UX, DevOps |
| **Testimonials** | Team testimonials carousel |
| **Contact** | EmailJS form + WhatsApp redirect |

---

## 💼 Featured Projects

| Project | Category | Live |
|---------|----------|------|
| PayolStudy | School Management | [payolstudy.com](https://payolstudy.com/) |
| Clickfy | Food Delivery Platform | [clickfy.devtechnosys.tech](http://clickfy.devtechnosys.tech/) |
| Gelaxy | E-Commerce | [gelaxy.in](https://gelaxy.in/) |
| Mekart | E-Commerce | [mekart.in](https://mekart.in/) |
| Shewahh | E-Commerce | [test.shewahh.com](https://test.shewahh.com/) |
| VHK Foundation | NGO / Charity | [vhkfoundation.org](https://vhkfoundation.org/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/my-portfolio.git

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📬 Contact Form Setup

This portfolio uses **EmailJS** for the contact form. To configure:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Replace the credentials in `Contact.jsx`:

```js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Bhupendra Chopra**
- 📧 [bhupendrachopra001@gmail.com](mailto:bhupendrachopra001@gmail.com)
- 📞 +91 9413966576
- 📍 Jaipur, Rajasthan, India

---

> Built with ❤️ by Bhupendra Chopra
