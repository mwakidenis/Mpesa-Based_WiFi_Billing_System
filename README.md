# 🎓 Mwaki Denis EduFreeKit

Open Source African Tech Learning Platform

MIT License · PRs Welcome · TypeScript · React · Vite · Supabase

🌐 Live Demo · 🐛 Report Bug · 💡 Request Feature · 🤝 Join Discord

---

## 📖 Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Database Schema & ERD](#database-schema--erd)
- [Usage](#usage)
- [Contributing](#contributing)
- [Priority Areas](#priority-areas)
- [Recognition](#recognition)
- [Questions](#questions)
- [Code of Conduct](#code-of-conduct)
- [Security](#security)
- [License](#license)
- [Contact & Community](#contact--community)
- [Acknowledgments](#acknowledgments)
- [Roadmap](#roadmap)
- [Good First Issues](#good-first-issues)
- [Support the Project](#support-the-project)

---

## 🌍 About the Project
**EduFreeKit** is an open-source platform dedicated to curating and sharing high-quality tech learning resources. Built by African developers for learners worldwide, it ensures education is **free, accessible, and community-driven**.

**🎯 Our Mission**
- Curate high-quality learning resources in multiple tech domains.
- Empower African developers and learners through open-source education.
- Showcase contributions from African developers and educators.
- Provide a platform for learners globally to access free tech education.

---

## 🔄 User Journey Flow
*Diagram pending (ERD included below in Database Schema section)*

---

## ✨ Features
### Core Functionality
- 🔐 **User Authentication**: Secure email/password authentication.
- 📝 **Resource Contribution**: Authenticated users submit learning resources.
- ⭐ **Ratings & Reviews**: Rate resources 1–5 stars with comments.
- 🔍 **Advanced Search & Filtering**: Search by title, tags; filter by category/difficulty.
- 🔄 **Smart Sorting**: Sort resources by newest, oldest, popularity, rating.
- 📊 **Category Organization**: 8 tech categories with dedicated pages.
- 👤 **User Profiles**: Auto profile creation with avatar support.
- 📱 **Responsive Design**: Mobile-first, beautiful UI.
- 📖 **Bookmarks System**: Save favorite resources.
- 📊 **User Dashboard**: Track contributions, bookmarks, statistics.
- 💾 **Export Bookmarks**: Export as JSON, CSV, or Markdown.
- ♿ **Accessibility**: ARIA labels, skip links, keyboard navigation.
- 👁️ **View Tracking**: See how many times resources were accessed.

### Categories Covered
- Computer Science
- Web Development
- Cloud Computing
- Blockchain & Web3
- AI/ML & Data Science
- Mobile Development
- DevOps
- Cybersecurity

---

## 🛠️ Tech Stack
### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- Sonner

### Backend (Supabase)
- PostgreSQL
- Supabase Auth
- Row Level Security (RLS)
- Supabase Realtime

### Developer Tools
- ESLint
- TypeScript ESLint
- Lucide React

---

## 🏗️ System Architecture
![ERD](./erd.png)
> The ERD illustrates the database structure including `profiles`, `resources`, `ratings`, `bookmarks`, and `resource_views`.

---

## 🚀 Getting Started
### Prerequisites
- Node.js v18+
- npm / yarn / bun
- Git

### Installation
```bash
git clone https://github.com/mwakidenis/mwakidenis.git
cd mwakidenis
npm install # or yarn install / bun install
Environment Variables
Create a .env in root:

ini
Copy code
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
Run Dev Server
bash
Copy code
npm run dev
App will be at http://localhost:8080.

🗄️ Database Schema & ERD
Tables
profiles

id: UUID PK

username: TEXT, unique

avatar_url: TEXT

created_at: TIMESTAMPTZ

resources

id: UUID PK

title: TEXT

description: TEXT

link: TEXT

category: TEXT

difficulty: TEXT

tags: TEXT[]

contributor_id: UUID FK -> profiles.id

view_count: INTEGER

created_at: TIMESTAMPTZ

ratings

id: UUID PK

resource_id: UUID FK -> resources.id

user_id: UUID FK -> profiles.id

rating: INTEGER (1-5)

comment: TEXT

created_at: TIMESTAMPTZ

bookmarks

id: UUID PK

user_id: UUID FK -> profiles.id

resource_id: UUID FK -> resources.id

created_at: TIMESTAMPTZ

resource_views

id: UUID PK

resource_id: UUID FK -> resources.id

user_id: UUID FK -> profiles.id (nullable)

viewed_at: TIMESTAMPTZ

💻 Usage
For Learners

Browse tracks

Search, filter, and sort

Sign up to rate, review, bookmark, export bookmarks

For Contributors

Sign up

Contribute learning resources, free certificates, YouTube content

Review and rate resources

🤝 Contributing
We welcome developers, designers, educators!

Ways to Contribute
📚 Share resources

💻 Contribute code

🎨 UI/UX Design

📖 Documentation

🧪 Testing & Feedback

Contribution Workflow
bash
Copy code
git clone https://github.com/mwakidenis/mwakidenis.git
git checkout -b feature/amazing-feature
# make changes, test, commit
git push origin feature/amazing-feature
🎯 Priority Areas
Area	Difficulty	Impact
Advanced Search	Medium	High
Analytics Dashboard	Medium-Hard	High
Learning Paths	Medium	High
Accessibility	Easy-Medium	High
Mobile App	Hard	High

🏆 Recognition
Contributors page

Monthly highlights

Special badges

❓ Questions?
💬 Discussions

📧 Email: contribute@mwakidenis.com

🐛 Report issues

💡 Suggest features

📜 Code of Conduct
✅ Be respectful and inclusive

❌ No harassment or trolling
Violations? Email: contribute@mwakidenis.com

🔒 Security
Report vulnerabilities responsibly: security@mwakidenis.com

📄 License
MIT License. See LICENSE.

📞 Contact & Community
Platform	Link	Purpose
💻 GitHub	Repo	Code, PRs, Issues
💬 Discord	Join Server	Real-time chat
📧 Email	contribute@mwakidenis.com	General inquiries

🙏 Acknowledgments
Supabase, shadcn/ui, Lucide, Tailwind CSS

Open Source Community

Contributors

🗺️ Roadmap
Q1 2025: Advanced search with AI suggestions

Q1 2025: Analytics dashboard

Q2 2025: Multi-language support

Q2 2025: Native mobile app

Q2 2025: Guided learning paths & certifications

🎯 Good First Issues
Documentation fixes

UI improvements

Accessibility

Bug fixes

Testing

💖 Support the Project
⭐ Star repo

🍴 Fork

💬 Join discussions

📢 Share

Made with ❤️ in Africa for the world 🌍
