
# Portfolio Website

This is a personal portfolio website built with [Next.js](https://nextjs.org), designed to showcase your skills, experience, and projects. The project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and features a modern, responsive design with an admin dashboard for easy content management.

## 🚀 Features

- Modern, responsive UI with custom sections for About, Projects, Skills, Experience, Education, Tools, and References
- Admin dashboard for editing portfolio content (protected routes)
- Authentication for admin access
- Data-driven sections (JSON-based for easy updates)
- Modular React components and hooks
- Dark/light mode ready (customize as needed)
- Deployable on Vercel or any Next.js-compatible platform

## 📁 Folder Structure

```
src/
  admin/                # Admin dashboard and editors
  app/                  # Next.js app directory (public and admin routes)
  components/           # Reusable UI and layout components
  context/              # React context providers (Auth, Portfolio)
  data/                 # Portfolio data in JSON format
  hooks/                # Custom React hooks
  lib/                  # Utility functions and constants
  types/                # TypeScript type definitions
public/                 # Static assets
```

## 🛠️ Getting Started

yarn dev

1. Install dependencies:

	```bash
	pnpm install
	# or
	npm install
	# or
	yarn install
	# or
	bun install
	```

2. Run the development server:

	```bash
	pnpm dev
	# or
	npm run dev
	# or
	yarn dev
	# or
	bun dev
	```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. To access the admin dashboard, navigate to `/admin` and log in (see `src/data/profile.json` for credentials or setup).

5. Edit portfolio content via the dashboard or by modifying the JSON files in `src/data/`.

## 📝 Customization

- Update your profile and content in `src/data/`
- Adjust styles in `src/app/globals.css` and component files
- Add or remove sections by editing components in `src/components/sections/`

## 📦 Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js:

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Set up environment variables if needed
4. Deploy!

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---

_Built with [Next.js](https://nextjs.org/) and ❤️ by Jerry7675._
