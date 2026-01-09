Product Dashboard

Project Overview

This project is a Product Dashboard web application that allows users to:
	•	View a list of products fetched from a dummy API
	•	Search and filter products by title or category
	•	Add products to a shopping cart
	•	Update quantity or remove items from the cart
	•	Manage user session with login/logout functionality
	•	Experience a responsive and interactive UI

The dashboard includes a sticky shopping cart sidebar, making it easy for users to view their cart while browsing products.

⸻

Features Implemented
	•	User Authentication: Login and logout with dummy endpoints
	•	Username: john
	•	Password: john@123
	•	Protected Routes: Only authenticated users can access the dashboard
	•	Product Listing: Fetches and caches product data using TanStack Query
	•	Search & Filter: Products can be filtered by title or category
	•	Shopping Cart: Add/remove/update quantity of products using Zustand for global state
	•	Responsive UI: Designed with CSS Flex/Grid and optional Tailwind
	•	Smooth Animations: Product cards use Framer Motion hover animations
	•	Forms (Optional): Add/Edit product form can use React Hook Form with Zod validation

⸻

Tech Stack and Libraries
	•	React 18 / TypeScript – UI and type safety
	•	React Router DOM – Client-side routing and protected routes
	•	TanStack Query – Fetching, caching, and synchronizing data
	•	Zustand – Global state management for cart and user session
	•	Framer Motion – Animations for interactive UI elements
	•	CSS / Tailwind (optional) – Styling components and layouts

⸻

Setup and Installation
	1.	Clone the repository

git clone <your-repo-url>
cd product-dashboard-fresh

	2.	Install dependencies

npm install

	3.	Start development server

npm run dev

	4.	Open in browser
Navigate to http://localhost:5178￼
	5.	Login using the test account

	•	Username: john
	•	Password: john@123

⸻

Approach & Architecture
	•	Component-based structure: Reusable ProductCard, Navbar, and ProductForm components
	•	State management: Zustand for global cart and user session state
	•	Data fetching: TanStack Query provides caching and automatic refetching
	•	Styling: CSS grid and flexbox for layout, optional Tailwind classes
	•	Routing & Auth: Protected routes using React Router to redirect unauthenticated users

⸻

Challenges & Solutions
	•	Cart state persistence: Managed via Zustand to ensure consistent updates across components
	•	Responsive layout: Used CSS grid and flexbox to make products and cart display correctly on all screen sizes
	•	Dynamic product search: Implemented filtering by both title and category in real-time
	•	Button alignment & styling: Centered buttons on cards and styled logout button for better UX

⸻

Assumptions & Improvements
	•	Products API is assumed to be a static dummy API (DummyJSON)
	•	Cart is stored in memory (not persisted across page reloads)
	•	Improvements could include:
	•	Persisting cart in localStorage or backend
	•	Adding product categories filters and price range filters
	•	Adding authentication with JWT or OAuth
	•	Making cart responsive for mobile (slide-in drawer)
