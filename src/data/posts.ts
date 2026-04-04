import type { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "patient-management-system",
    title: "How I Built a Patient Management System",
    description:
      "A step-by-step build of a secure patient management dashboard using React, Next.js, and role-based access control.",
    date: "2025-11-10",
    author: "Sandesh",
    tags: ["React", "Healthcare", "Full Stack", "Next.js"],
    image: "/blog/patient-management-system.png",
    content:
      "In this post, I break down how I built a patient management system with authentication, appointment scheduling, and secure data flows. I cover the architecture, reusable components, and deployment strategy.",
  },
  {
    slug: "react-authentication-guide",
    title: "React Authentication Guide: Secure Login Workflows",
    description:
      "Best practices for building authentication flows in React applications with JWTs, protected routes, and token refresh.",
    date: "2025-10-18",
    author: "Sandesh",
    tags: ["React", "Authentication", "JWT", "Security"],
    image: "/blog/react-authentication-guide.png",
    content:
      "This guide covers secure login flows, client-side route guards, and how to protect React applications using token storage patterns and server validation.",
  },
  {
    slug: "firebase-security-rules",
    title: "Firebase Security Rules for Production Apps",
    description:
      "A practical walkthrough of Firebase security rules for Firestore and Storage with real-world examples and access control patterns.",
    date: "2025-09-05",
    author: "Sandesh",
    tags: ["Firebase", "Security", "Firestore", "DevOps"],
    image: "/blog/firebase-security-rules.png",
    content:
      "Discover how to write maintainable Firebase security rules that protect user data, enforce authentication, and allow granular permissions for production applications.",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
