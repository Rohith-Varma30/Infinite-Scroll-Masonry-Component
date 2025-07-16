#  Infinite Scroll Masonry Component

A responsive image/video gallery with infinite scroll using **React**, **CSS-based Masonry layout**, and **React Query,Router-DOM** —

This Task is a responsive infinite scroll gallery built with ReactJS. It renders a masonry-style layout of images and videos, supports intelligent infinite scrolling, and includes route-based data loading — simulating a real-world creative feed.
---

##  Features

-  **Masonry-style layout** (using CSS column-count)
-  **Infinite scroll** using scroll position (no Intersection Observer)
- **React Query** for efficient fetching, pagination & caching
- **React Router v6+** for dynamic routing: `/g/:generation_id`
- **Skeleton loaders** for smooth content loading experience
-  Built with **functional components** and **custom CSS styling**

##  Code Quality
Modular components

Responsive layout with CSS media queries

Skeletons & loading fallback

Reusable API logic

Used useInfiniteQuery() from React Query

Listens to window scroll via useEffect

##  Simulated API
Data is generated dynamically inside fetchContent.js. It generates a paginated API using offset and limit, returning 20 items per scroll.

I have used Picsum Photos like:
https://picsum.photos/id/${id}/500/300

-->

  ##  Setup Instructions

```bash
git clone https://github.com/YOUR_USERNAME/gallery-app.git
cd gallery-app
npm install
npm start
